<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ["email", "message"],
  computed: {
    emailLink() {
      return "mailto:" + this.email; // browser open the email client
    }
  }
};

</script>

<style scoped>

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #023b59;
  text-decoration: none;
  font-weight: bold;
  word-break: break-word;
}

a:hover,
a:active {
  color: #ed0b70;
}

p {
  margin: 0.5rem 0 0 10px;
}

</style>