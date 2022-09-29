<template>
  <toolbar>
    <template #start>
      <div class=" logo flex align-items-center justify-content-center">
        <router-link to="/">Find a Coach</router-link>
        <i class="pi pi-search"
           style="font-size: 1.5rem"></i>
      </div>
      <div>
        <router-link to="/coaches">All Coaches</router-link>
        <router-link to="/requests"
                     v-if="isLoggedIn">Requests
        </router-link>
      </div>
      <div class="login-logout-btn flex align-items-center justify-content-center">
      <span v-if="!isLoggedIn">
        <i class="pi pi-sign-in"
           style="font-size: 12px"></i>
      </span>
        <router-link to="/auth"
                     v-if="!isLoggedIn">Login
        </router-link>

        <span v-if="isLoggedIn">
        <i class="pi pi-sign-out"
           style="font-size: 12px"></i>
      </span>
        <button v-if="isLoggedIn"
                @click="logout">Logout
        </button>
      </div>
    </template>
  </toolbar>
</template>

<script>
export default {

  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/coaches");
    },
    toggle(event) {
      this.$refs.menu.toggle(event);
    }
  }
};
</script>

<style>

.p-toolbar {
  height: 50px;
  width: 100%;
  background-color: #023b59;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center !important;
}

a {
  text-decoration: none;
  color: #f6ebf4;
  display: inline-block;
  margin-left: 10px;
  margin-right: 5px;
}

a:active,
  /*a:hover,*/
a.router-link-active {
  border-bottom: 3px solid #ed0b70;
}

h1 {
  margin: 0;
  color: #f6ebf4;
}

.logo a {
  font-size: 20px;
  margin-right: 10px;
  margin-left: 0;
  border: unset;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.p-menu ul {
  background-color: #023b59;
}

button {
  cursor: pointer;
  color: #f6ebf4;
  background: none;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: inherit;
}

button:hover {
  color: #ed0b70;
}

.p-toolbar-group-left {
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>