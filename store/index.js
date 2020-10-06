export const state = () => ({
    sitewide: {},
    nav: [],
    pages: {},
    categories: {},
    products: {}
});

function sortItems(data) {
    let newdata = [];
    for (var d in data) {
        let keys = Object.keys(newdata);
        let item = data[d];
        if (item.shown || item.status || item.status === 'published') {
            newdata.push(item);
        }
    }
    return newdata;
}

function slugSomething(text) {
    return text.toLowerCase().replace(/\W/g, '-').replace(/--/g, '-').match(/\b(\w)/g).join('')
}
function slugSomethingLarge(text) {
    return text.toLowerCase().replace(/\W/g, '-').replace(/--/g, '-').substring(0,3);
}
function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

export const mutations = {
    setSitewide(state, data) {
        state.sitewide = data;
    },
    setNav(state, data) {
        var checkLive = sortItems(data);
        var populate = checkLive[0].nav_items;
        state.nav = populate;
    },
    setPages(state, data) {
        let newObj = {};
        for (let o in data) {
            let obj = data[o];
            newObj[obj.slug] = obj;
        }
        // console.log(newObj);
        state.pages = newObj;
        //SET STATIC ADS BELOW - GET AD DATA AND GET IMAGES FROM PRODUCT DETAILS
        for (let a in newObj) {
            let page = newObj[a];
            if (page.hasOwnProperty("ads") && Object.keys(page.ads).length > 0) {
                for (let adCategory in page.ads) {
                    let category = page.ads[adCategory];
                    if (category.length > 0) {
                        category.forEach(ad => {
                            let product = state.products.filter(prod => {
                                return prod.name === ad.ad
                            });
                            console.log(product[0].productimgs);
                            if (product[0] && product[0].productimgs && product[0].productimgs.imgs) {
                                console.log('here');
                                let images = product[0].productimgs.imgs.filter(img => {
                                    return adCategory.indexOf(img.type) >= 0;
                                });
                                ad.data = product[0];
                                ad.data.productimgs = images;
                                console.log(images);
                            }
                            
                            
                            // console.log(ad.data);
                        });
                    }
                }
            };
        }
    },
    setCategories(state, data) {
        for (let cat in data[0].categories) {
            const category = data[0].categories[cat];
            category.fullads = [];
            for (let ques in category.questions) {
                let question = category.questions[ques];
                question["checked"] = -1;
                question["superhot"] = false;
            }
            let questionsWithAds = category.questions.filter(function (question) {
                return question.hasOwnProperty("relatedproducts");
            });
            let allAds = [];
            questionsWithAds.forEach(ques => {
                ques.relatedproducts.forEach(ad => {
                    allAds.push(ad);
                });
            });
            allAds = [...new Set(allAds)];
            if (allAds.length > 0) {
                let narrowedList = [];
                while (narrowedList.length <= 14 && allAds.length >= narrowedList.length) {
                    narrowedList.push(getRandom(allAds));
                }
                if (state.products) {
                    let fullAdArr = state.products.filter(prod => {
                        return narrowedList.includes(prod.name);
                    });
                    fullAdArr.forEach(ad => {
                        if (ad.productimgs && ad.productimgs.imgs) {
                            let squareImg = ad.productimgs.imgs.filter(img => {
                                return img.type.includes("square")
                            })[0].img;
                            ad.img = squareImg;
                        }
                    });
                    category.fullads = shuffleArr(fullAdArr);
                }
            }
        }
        state.categories = data[0].categories;
    },
    checkedQuestion(state, dataObj) {
        state.categories[dataObj.category].questions[dataObj.question].checked = parseInt(dataObj.answer);
        if (dataObj.singleout > 0) {
            state.categories[dataObj.category].questions[dataObj.question].singleout = dataObj.singleout;
        }
        if (dataObj.superhot) {
            state.categories[dataObj.category].questions[dataObj.question].superhot = true;
        }
    },
    setProducts(state,data) {
        state.products = data;
    }
};

export const getters = {
    sitewide: state => state.sitewide,
    nav: state => state.nav,
    pages: state => state.pages,
    categories: state => state.categories,
    products: state => state.products
};

export const actions = {
    async nuxtServerInit({ commit }) {
        var datas = await require.context('~/assets/content/sitewide/', false, /\.json$/);
        var d = datas.keys().map(key => {
            let res = datas(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setSitewide', d[0]);

        var datas = await require.context('~/assets/content/nav/', false, /\.json$/);
        var d = datas.keys().map(key => {
            let res = datas(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setNav', d);

        var products = await require.context('~/assets/content/products/', false, /\.json$/);
        var d = products.keys().map(key => {
            let res = products(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setProducts', d);

        var datas = await require.context('~/assets/content/pages/', false, /\.json$/);
        var d = datas.keys().map(key => {
            let res = datas(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPages', d);

        var categories = await require.context('~/assets/content/categories/', false, /\.json$/);
        var d = categories.keys().map(key => {
            let res = categories(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setCategories', d);
    }
};