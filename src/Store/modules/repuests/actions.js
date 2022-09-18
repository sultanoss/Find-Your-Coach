export default {
  async contactCoach(context, payload) {
    const newRequest = {
      // id: new Date().toISOString(), no more need . Firebase set new id
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(`https://find-a-coach-1af22-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
      method: "POST",
      body: JSON.stringify(newRequest)
    });
    const responseDate = await response.json();
    if (!response.ok) {
      const error = new Error(responseDate.message || "Failed to send requests.");
      throw error;
    }
    newRequest.id = responseDate.name; //generate id in name field
    newRequest.coachId = payload.coachId;
    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId; // get only requests from registered coach  through his id
    const response = await fetch(`https://find-a-coach-1af22-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`);
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to send requests.");
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    context.commit("setRequests", requests);
  },

};