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
        state.pages = newObj;
    },
    setCategories(state, data) {
        for (let cat in data[0].categories) {
            const category = data[0].categories[cat];
            for (let ques in category.questions) {
                category.questions[ques]["checked"] = -1;
                category.questions[ques]["superhot"] = false;
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
    setPhysicalProducts(state,data) {
        state.products.physical = data;
    },
    setDigitalProducts(state,data) {
        state.products.digital = data;
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

        var physicalProducts = await require.context('~/assets/content/products/', false, /\.json$/);
        var d = physicalProducts.keys().map(key => {
            let res = physicalProducts(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setPhysicalProducts', d);

        var digitalProducts = await require.context('~/assets/content/digitalproducts/', false, /\.json$/);
        var d = digitalProducts.keys().map(key => {
            let res = digitalProducts(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setDigitalProducts', d);
    }
};