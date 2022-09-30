<template>
  <section>
      <h2>Page not found !</h2>
    <router-link to="/coaches">Back</router-link>
  </section>
</template>
<script>


export default {
  components: {  }
};
</script>

<style scoped>
section{
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  color: #023b59;
  width: 95%;
  margin: 0 auto;
}

section a{
  color: black;
  cursor: pointer;
  margin-left: 0;
}

</style>