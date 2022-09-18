export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      // id: context.rootGetters.userId,  id from the added coach from root parameter
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };
    const response = await fetch(`https://find-a-coach-1af22-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
      method: "PUT",
      body: JSON.stringify(coachData),
    });
    //const responseData = await response.json();
    if (!response.ok) {
      //error....
    }

    //...coachData copy object coachDate and add id
    context.commit("registerCoach", {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) { // to not fetch all the Time if all coaches visited, will fetch automatically after 60 second or press refresh button
      return;
    }
    const response = await fetch(
      `https://find-a-coach-1af22-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch ");
      throw error;
    }
    const coaches = []; //transform data all,save data in coaches array
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }
    context.commit("setCoaches", coaches);
    context.commit(("setFetchTimestamp"));
  },
};