import { defineStore } from "pinia";

export const useRequestStore = defineStore("requestStore", {
	state: () => ({
		requests: [],
	}),
	actions: {
		requestDJ() {},
	},
});
