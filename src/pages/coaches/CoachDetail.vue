<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>{{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <h2>Interested Reach out now!</h2>
        <base-button link
                     :to="contactLink">Contact
        </base-button>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in areas"
                    :key="area"
                    :type="area"
                    :title="area"></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>
<script>

import BaseCard from "@/components/UI/BaseCard";
import BaseBadge from "@/components/UI/BaseBadge";

export default {
  components: { BaseBadge, BaseCard },
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },

  computed: {
    fullName() {
      return this.selectedCoach.firstName + "" + this.selectedCoach.lastName;
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