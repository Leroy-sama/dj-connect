export default {
    async addDiskJockey(context, data) {
        const userId = context.rootGetters.userId;
        const djData = {
            djName: data.dj,
            description: data.desc,
            hourlyRate: data.rate,
            services: data.servi,
        };

        const response = await fetch(
            `https://dj-connect-app-default-rtdb.firebaseio.com/djs/${userId}.json`,
            {
                method: "PUT",
                body: JSON.stringify(djData),
            }
        );

        // const responseData = await response.json()

        context.commit("addDiskJockey", {
            ...djData,
            id: userId,
        });
    },
    async loadDjs(context) {
        const response = await fetch(
            `https://dj-connect-app-default-rtdb.firebaseio.com/djs.json`
        );
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || "Failed to fetch");
            throw error;
        }

        const djs = [];
        for (const key in responseData) {
            const dj = {
                id: key,
                djName: responseData[key].djName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                services: responseData[key].services,
            };
            djs.push(dj);
        }
        context.commit("setDjs", djs);
    },
};
