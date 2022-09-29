<template>
  <div class="coach-details-container">
    <div class="coach-details">
      <h2>{{ fullName }}</h2>
      <h3>{{ rate }}/hour</h3>
      <div>
      <base-badge v-for="area in areas"
                  :key="area"
                  :type="area"
                  :title="area"></base-badge>
      </div>
      <p>{{ description }}</p>
<!--      <h2>Interested Reach out now!</h2>-->
      <!--      <base-button link-->
      <!--                   :to="contactLink">Contact-->
      <!--      </base-button>-->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

import BaseBadge from "@/components/UI/BaseBadge";

export default {
  components: { BaseBadge },
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },

  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    }
  },

  created() {  //created lifecycle hook
    // we get the id from param
    // check if id true ,id will be stored in selectedCoach
    // to find coach in the coaches list
    this.selectedCoach = this.$store.getters["coaches/coaches"]
      .find(coach => coach.id === this.id);
  },

};
</script>

<style scoped>

.coach-details-container {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.coach-details {
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 1px solid #023b59;
  padding: 20px;
  border-radius: 12px;
}

h2 {
  color: #023b59;
  margin-top: 0;
  margin-bottom: 20px;
}

h3 {
  color: #023b59;
  margin-top: 0;
  margin-bottom: 20px;
}

p {
  border: 1px solid black;
  padding: 10px;
  border-radius: 12px;
  min-height: 89px;
  margin-top: 0;
  margin-bottom: 0;
}

.frontend{
  margin-top: 0;
  margin-bottom: 20px;
}
.backend{
   margin-top: 0;
   margin-bottom: 20px;
 }

.career{
  margin-top: 0;
  margin-bottom: 20px;
}


</style>