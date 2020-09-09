<template>
    <div class="container">
        <div class="half__header">
            <div class="half__header__inner" v-if="this.allDone">
                <h1>{{ user_name }}, it's results time!</h1>
                <p>Get ready to rumble, {{ partner_name }}'s and your results are below.</p>
            </div>
        </div>
        <div 
            v-if="this.allDone"
            class="page__questions"
        >
            <CategoryCell 
                v-for="category in users.responseCategories"
                :key="category.name"
                :category="category"
                :users="users"
                :currentUser="currentUser"
                :alldone="allDone"
            ></CategoryCell>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            allDone: false,
            databaseExists: false,
            users: {
                uuid: "",
                name_1: "",
                equipment_1: "male",
                email_1: "",
                user_1_data_submitted: false,
                name_2: "",
                equipment_2: "female",
                email_2: "",
                user_2_data_submitted: false,
                coupletype: "gay-male",
                spice_level: 4,
                questions: {},
                responseCategories: {}
            },
            user_name: "",
            partner_name: "",
            currentUser: 0,
        }
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageData: function () {
            return this.$store.state.pages.index
        },
        categories: function () {
            return this.$store.state.categories
        }
    },
    methods: {
        getImage: function(name) { //GET IMAGE FROM LIST OF SITE IMAGES FROM NETLIFYCMS
            const images = this.pageData.pageimages;
            return images.filter(img => img.imagename === name);
        },
        

        //INITIAL DATABASE CHECK FUNCTIONS
        checkDatabase: function () { //CHECK DB FOR USER DATA AND EXISTANCE
            const databaseFunction = "/.netlify/functions/check-database";
            const data = {
                uuid: this.users.uuid,
                user: this.user,
                categories: this.categories
            };
            return new Promise((resolve, reject) => {
                fetch(databaseFunction, {
                    method: "POST",
                    body: JSON.stringify(data)
                }).then(async response => {
                    return response.json();
                }).then(data => {
                    // console.log(data);
                    if (data.name !== "NotFound") { //CHECKS TO SEE IF DATA OR USER EXISTS IN DATABASE
                        this.databaseExists = true;
                        this.allDone = true;
                        this.setDataFromDatabase(data);
                    }
                    resolve(data);
                }).catch(err => {
                    reject(err);
                });
            })
        },
        setDataFromDatabase: function (d) { //INITIAL DATA SET WITH DATA FROM FAUNADB
            const dbData = d.data;
            for (let datapoint in dbData) {
                this.users[datapoint] = dbData[datapoint];
            }
            this.user_name = this.currentUser === 1 ? dbData["name_1"] : dbData["name_2"];
            this.partner_name = this.currentUser === 1 ? dbData["name_2"] : dbData["name_1"];
            this.allDone = true;
            this.setAnswers(dbData);
        },


        //AGGREGATE ANSWERS
        setAnswers: function(dbData) {
            // let categoriesObj = {};
            for (let a in dbData.questions) {
                let answer = dbData.questions[a];
                if (!this.users.responseCategories.hasOwnProperty(answer.category)) {
                    let cat = this.categories.filter(category => {
                        return category.name === answer.category
                    })[0];
                    let newCat = Object.assign({}, cat);
                    delete newCat.questions;
                    newCat.questions = [];
                    this.users.responseCategories[answer.category] = newCat;
                }
                for (let i = 0; i < this.categories.length; i++) {
                    let category = this.categories[i];
                    for (let j = 0; j < category.questions.length; j++) {
                        let catQuestion = category.questions[j];
                        if (catQuestion.question === answer.question && Object.keys(answer.answers).length > 1) {
                            let newQues = Object.assign(answer, catQuestion);
                            this.users.responseCategories[answer.category].questions.push(newQues);
                        }
                    }
                }
            }
        },
        alreadyAnswered: function () {
            for (let q in this.users.questions) {
                let dataQuestion = this.users.questions[q][this.currentUser];
                for (let i = 0; i < this.categories.length; i++) {
                    let category = this.categories[i];
                    for (let j = 0; j < category.questions.length; j++) {
                        let catQuestion = category.questions[j];
                        if (catQuestion.question === q) {
                            let checkedObj = {
                                category: parseInt(i),
                                question: parseInt(j),
                                answer: parseInt(dataQuestion.answer),
                                superhot: dataQuestion.superhot,
                                singleout: parseInt(dataQuestion.singleout)
                            };
                            this.$store.commit("checkedQuestion", checkedObj);
                        }
                    }
                }
            }
        },


        
        
        redirectHome: function () {
            this.$router.push("/");
        }
    },
    mounted() {
        if (this.$route.query && this.$route.query.uuid) { //IF THERE IS DATA IN THE QUERY FIELDS OF THE URL TO SHOW USER DATA
            this.users.uuid = this.$route.query.uuid.split("-")[0];
            this.currentUser = parseInt(this.$route.query.uuid.split("-")[1]);
            this.checkDatabase(); //CALL DATABSE WITH URL INFO
        } else {
            this.redirectHome(); //JUST SHOW QUESTIONS - PEOPLE NOT 'LOGGED IN' THAT JUST WANT TO SEE THE QUESTIONS
        }
    },
    head () {
        return {
            title: "The Lust Amigo Results | Sex Quiz To Bring You Closer With Your Partner",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "The Lust Amigo is an fun, quick way to see what sort of kinks, and desires you have in common with your partner."
                },
                {
                    hid: 'robots', 
                    name: 'robots', 
                    content: 'noindex, nofollow'
                }
            ]
        }
    }
}
</script>

<style>
.results {
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    padding-bottom: 100px;
}
.results__snake {
    max-height: 170px;
}
.results__bottle {
    max-height: 300px;
}
.results .category__questions {
    border-top: none;
}
</style>
