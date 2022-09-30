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
      email:"radwansultan@hotmail.de"
    };
  },

  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
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
methods:{
  contactLink() {
    console.log(this.id)
    return this.$route.path + "/coaches" + this.id + "/contact";
  },
}
};
</script>

<style scoped>

.coach-details-container {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.coach-details {
  display: flex;
  flex-direction: column;
  width: 100%;
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
  border: 1px solid #023b59;
  padding: 10px;
  border-radius: 4px;
  min-height: 89px;
  margin-top: 0;
  margin-bottom: 0;
}

@media(max-width: 650px){
  p{
    max-height: 120px;
    overflow: auto;
  }
}

.frontend {
  margin-top: 0;
  margin-bottom: 20px;
}

.backend {
  margin-top: 0;
  margin-bottom: 20px;
}

.career {
  margin-top: 0;
  margin-bottom: 20px;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 10px lightgrey;
  border: solid 3px transparent;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 10px 10px rgb(174, 174, 174);
  border: solid 3px transparent;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  box-shadow: inset 0 0 10px 10px rgb(142, 142, 142);
}


</style>