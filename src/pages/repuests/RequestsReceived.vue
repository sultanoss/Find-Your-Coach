<template>
  <div class="requests-container">
    <base-dialog :show="!!error"
                 title="An error occurred"
                 @close="handleError"> <!--  !!error convert a string to a boolean-->
      <p>{{ error }}</p>
    </base-dialog>
    <div class="requests-header">
      <h2>Requests Received</h2>
    </div>
    <base-spinner v-if="isLoading"></base-spinner>
    <ul v-else-if="hasRequests && !isLoading">
      <request-item v-for="req in receivedRequests"
                    :key="req.id"
                    :email="req.userEmail"
                    :message="req.message"></request-item>
    </ul>
    <h3 v-else>You haven't received any requests yet!</h3>
  </div>
</template>
<script>

import RequestItem from "@/components/requests/RequestItem";
import BaseDialog from "@/components/UI/BaseDialog";
import BaseSpinner from "@/components/UI/BaseSpinner";

export default {
  components: { BaseSpinner, BaseDialog, RequestItem },
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

.requests-container {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.requests-header {
  display: flex;
  width: 95%;

}

section {
  width: 100%;
}

ul {
  display: flex;
  flex-direction: column;
  width: 95%;
  list-style: none;
  padding: 0;
  margin-top: 0;
  height: 68vh;
  overflow: auto;
}

li{
  border-radius: 12px;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 10px;
  margin-right: 2.3%;
}

h3 {
  text-align: center;
}

h2 {
  color: #023b59;
  font-size: 20px;
  margin-top: 20px;
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