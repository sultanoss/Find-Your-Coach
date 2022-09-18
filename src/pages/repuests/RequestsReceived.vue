<template>
  <div>
    <base-dialog :show="!!error"
                 title="An error occurred"
                 @close="handleError"> <!--  !!error convert a string to a boolean-->
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <h2>Requests Received</h2>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequests && !isLoading">
          <request-item v-for="req in receivedRequests"
                        :key="req.id"
                        :email="req.userEmail"
                        :message="req.message"></request-item>
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>
<script>
import BaseCard from "@/components/UI/BaseCard";
import RequestItem from "@/components/requests/RequestItem";
import BaseDialog from "@/components/UI/BaseDialog";
import BaseSpinner from "@/components/UI/BaseSpinner";

export default {
  components: { BaseSpinner, BaseDialog, RequestItem, BaseCard },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    }
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/fetchRequests");
      } catch (error) {
        this.error = error.message || "Something went wrong";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  }
};
</script>

<style scoped>

header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}

</style>