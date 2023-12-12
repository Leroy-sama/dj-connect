export default {
    async contactDj(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            djId: payload.djId,
            userEmail: payload.email,
            message: payload.message,
        };
        const response = await fetch(
            `https://dj-connect-app-default-rtdb.firebaseio.com/requests/${payload.djId}.json`,
            {
                method: "POST",
                body: JSON.stringify(newRequest),
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(
                responseData.message || "Failed to send request."
            );
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.djId = payload.djId;

        context.commit("addRequest", newRequest);
    },
    async fetchRequests(context) {
        const djId = context.rootGetters.userId;
        const response = await fetch(
            `https://dj-connect-app-default-rtdb.firebaseio.com/requests/${djId}.json`
        );
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(
                responseData.message || "Failed to fetch requests."
            );
            throw error;
        }

        const requests = [];

        for (const key in responseData) {
            const request = {
                id: key,
                djId: djId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message,
            };
            requests.push(request);
        }
        context.commit("setRequests", requests);
    },
};
