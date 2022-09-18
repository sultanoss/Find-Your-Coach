<template>
  <toolbar>
    <template #start>
      <div class=" logo flex align-items-center justify-content-center">
        <router-link to="/">Find a Coach</router-link>
        <i class="pi pi-search"
           style="font-size: 1.5rem"></i>
      </div>
    </template>

    <template #end>
      <router-link to="/coaches">All Coaches</router-link>
      <router-link to="/requests">Requests</router-link>
    </template>
  </toolbar>
</template>

<style>

.p-toolbar {
  height: 75px;
  width: 100%;
  background-color: #023b59;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}

a {
  text-decoration: none;
  color: #f6ebf4;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;

  /*padding: 0.75rem 1.5rem;*/
  /*border: 1px solid transparent;*/
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
 font-size: 24px;
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

</style>