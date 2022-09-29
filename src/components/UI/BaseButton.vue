<template>
  <button v-if="!link"
          :class="mode">
    <slot></slot>
  </button>
  <router-link v-else
               :to="to"
               :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>

export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: "/"

    },
    mode: {
      type: String,
      required: false,
      default: ""
    }
  }
};

</script>

<style scoped>

button,
a {
  text-decoration: none;
  padding: 6px;
  text-align: center;
  font: inherit;
  color: black;
  cursor: pointer;
  border-radius: 4px;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  border-color: #ed0b70;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color:#4cbfa6;
  border-color: black;
  color: white;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  border-color: #4cbfa6;
}

</style>