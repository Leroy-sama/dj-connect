export default {
    requests(state, _, _2, rootGetters) {
        const djId = rootGetters.userId;
        return state.requests.filter((req) => req.djId === djId);
    },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
    },
};
