export default {
    addDiskJockey(state, payload) {
        state.djs.push(payload);
    },
    setDjs(state, payload) {
        state.djs = payload;
    },
};
