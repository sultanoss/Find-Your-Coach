<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}</h4>
    <div>
      <base-badge v-for="area of areas"
                  :type="area"
                  :key="area"
                  :title="area">
      </base-badge>
      <div class="actions">
        <base-button
          link
          :to="coachContactLink">Contact
        </base-button>
        <base-button link
                     :to="coachDetailsLink">View Details
        </base-button>
      </div>
    </div>
  </li>
</template>

<script>

import BaseButton from "@/components/UI/BaseButton";
import BaseBadge from "@/components/UI/BaseBadge";

export default {
  components: { BaseBadge, BaseButton },
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact"; //path to /coaches/c1/contact
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.id; //path to /coaches/c1/
    }
  }
};

</script>

<style scoped>

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding:0 25px 25px 25px;
}

h3 {
  font-size: 1.5rem;
  color:#023b59 ;
}

h3,
h4 {
  margin-top: 25px;
  margin-bottom: 0;
  color: #023b59;
}

div {

}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
}

</style>