<template>
  <router-view />
  <nav>
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/">Activity</router-link></li>
      <li><router-link to="/">Boxes</router-link></li>
      <li><router-link to="/">Goals</router-link></li>
    </ul>
  </nav>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
