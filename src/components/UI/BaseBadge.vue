<template>
  <span class="badge"
        :class="type">{{ text }}</span>
</template>

<script>

export default {
  props: ["type", "title"],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  },
};

</script>

<style scoped>

.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 0% 20% / 10% 40%;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 10px;
  width: 100px;
  text-align: center;
  margin-top: 16px;
}

.frontend {
  background-color:#ed0b70;
  color: white;
}

.backend {
  background-color: #ed0b70;
  color: white;
}

.career {
  background-color: #ed0b70;
  color: white;
}

</style>