export const state = () => ({
    sitewide: {},
    nav: [],
    pages: {},
    questions: {}
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
    }
};

export const getters = {
    sitewide: state => state.sitewide,
    nav: state => state.nav,
    pages: state => state.pages
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

        // var datas = await require.context('~/assets/content/questions/', false, /\.json$/);
        // var d = datas.keys().map(key => {
        //     let res = datas(key);
        //     res.slug = key.slice(2, -5);
        //     return res;
        // });
        // await commit('setQuestions', d);
    }
};