import { createStore } from "vuex";

import djsModule from "./modules/djs/index.js";
import requestsModule from "./modules/requests/index.js";

const store = createStore({
    modules: {
        djs: djsModule,
        requests: requestsModule,
    },
    state() {
        return {
            userId: "c5",
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        },
    },
});

export default store;
