export default {
    djs(state) {
        return state.djs;
    },
    hasDjs(state) {
        return state.djs && state.djs.length > 0;
    },
    isDj(_, getters, _2, rootGetters) {
        const djs = getters.djs;
        const userId = rootGetters.userId;
        return djs.some((dj) => dj.id === userId);
    },
};
