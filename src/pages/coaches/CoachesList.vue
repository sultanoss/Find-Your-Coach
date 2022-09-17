<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline"
                     @click="loadCoaches">Refresh
        </base-button>
        <base-button link
                     to="/register"
                     v-if="!isCoach && !isLoading">Register as Coach
        </base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coaches-item v-for="coach in filteredCoaches"
                      :key="coach.id"
                      :id="coach.id"
                      :first-name="coach.firstName"
                      :last-name="coach.lastName"
                      :rate="coach.hourlyRate"
                      :areas="coach.areas"
        ></coaches-item>
      </ul>
      <h3 v-else>No Coaches found.</h3>
    </base-card>
  </section>
</template>

<script>

import CoachesItem from "../../components/coaches/CoachesItem.vue";
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";
import CoachFilter from "@/components/coaches/CoachFilter";
import BaseSpinner from "@/components/UI/BaseSpinner";

export default {
  components: { BaseSpinner, CoachFilter, BaseButton, BaseCard, CoachesItem },
  data() {
    return {
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"]; //First coaches ist the namespaced name the second coaches is the getters name
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
    isCoach() {
      return !this.isLoading && this.$store.getters["coaches/isCoach"];
    }

  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches() {
      this.isLoading = true;
      await this.$store.dispatch("coaches/loadCoaches"); //dispatch method return a promise.we can use async/await (loading spinner set to true and after loadCoaches set to false)
      this.isLoading = false;
    }
  },

};

</script>

<style scoped>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

