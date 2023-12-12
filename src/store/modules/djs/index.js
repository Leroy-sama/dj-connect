import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
    namespaced: true,
    state() {
        return {
            djs: [
                {
                    id: "d1",
                    djName: "Dj Xboy 254",
                    services: ["Club-Nights", "Weddings"],
                    description:
                        "I am Dj Xboy and I am your party dj, wedding dj, social events dj and so on. Hire me to turn up your celebration musically",
                    hourlyRate: 20,
                },
                {
                    id: "d2",
                    djName: "Dj GrooveMaster",
                    services: ["Club-Nights", "Events", "Weddings"],
                    description:
                        "Experience the ultimate musical journey with Dj GrooveMaster. Specializing in club nights, corporate events, and private functions.",
                    hourlyRate: 25,
                },
                {
                    id: "d3",
                    djName: "Lady Beats",
                    services: ["Club-Nights", "Events"],
                    description:
                        "Lady Beats is your go-to DJ for nightlife events, festivals, and fashion shows. Bringing the hottest beats to elevate your event.",
                    hourlyRate: 18,
                },
                {
                    id: "d4",
                    djName: "DJ Pulsewave",
                    services: ["Events", "Club-Nights"],
                    description:
                        "Get ready for an electrifying experience with DJ Pulsewave. Specializing in concerts, raves, and sports events. Book now for a pulsating event!",
                    hourlyRate: 30,
                },
            ],
        };
    },
    mutations,
    actions,
    getters,
};
