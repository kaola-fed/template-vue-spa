const state = {
    systemTime: '',
    info: {
        title: ''
    }
};

const getters = {
    systemTime: state => state.count,
    info: state => state.info
};

const actions = {
    increase({ commit }) {
        commit('increment');
    },
    updateSystemTime({ commit }, payload) {
        commit('updateSystemTime', payload);
    },
    updateInfo({ commit }, payload) {
        commit('updateInfo', payload);
    }
};

const mutations = {
    setCount(state, count) {
        state.count = count;
    },
    increment(state) {
        state.count++;
    },
    updateSystemTime(state, payload) {
        state.systemTime = new Date(payload.systemTime);
    },
    updateInfo(state, payload) {
        state.info = payload.info;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
