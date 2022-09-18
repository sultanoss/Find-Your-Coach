<template>
  <section>
    <base-card>
      <h2>Page not found</h2>
      <p>This page could not be found!
        <router-link to="/coaches">Back</router-link>
      </p>
    </base-card>
  </section>
</template>
<script>
import BaseCard from "@/components/UI/BaseCard";

export default {
  components: { BaseCard }
};
</script>