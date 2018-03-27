const state = {
    count: 0
};

const getters = {
    count: state => state.count
};

const actions = {
    increase({ commit }) {
        commit('increment');
    }
};

const mutations = {
    setCount(state, count) {
        state.count = counts;
    },

    increment(state) {
        state.count++;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
