<template>
  <div class="coaches-list-container">
    <base-dialog :show="!!error"
                 title="An error occurred"
                 @close="handleError"> <!--  !!error convert a string to a boolean-->
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <div>
            <i class="pi pi-refresh  mr-1"
               style="cursor: pointer"
               @click="loadCoaches(true)"></i>
            <span>Refresh</span>
          </div>
          <base-button link
                       to="/register"
                       v-if=" isLoggedIn && !isCoach && !isLoading">Register as Coach
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
  </div>
</template>

<script>

import CoachesItem from "../../components/coaches/CoachesItem.vue";
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";
import CoachFilter from "@/components/coaches/CoachFilter";
import BaseSpinner from "@/components/UI/BaseSpinner";
import BaseDialog from "@/components/UI/BaseDialog";

export default {
  components: { BaseDialog, BaseSpinner, CoachFilter, BaseButton, BaseCard, CoachesItem },
  data() {
    return {
      isLoading: false,
      error: null,
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
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },

  },

  created() {
    this.loadCoaches();
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", { forceRefresh: refresh }); //dispatch method return a promise.we can use async/await (loading spinner set to true and after loadCoaches set to false)
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null; // error false dialog will close
    },
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
  align-items: center;
}

a {
  text-decoration: none;
  padding: 6px;
  text-align: center;
  font: inherit;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  display: inline-block;
  margin: 0;
  font-weight: 500;
  background-color: #ed0b70;
  font-size: 14px;
}

a:hover {
  opacity: 0.8;
}

.coaches-list-container{
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
section{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>

