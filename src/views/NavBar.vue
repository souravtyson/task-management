<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/login">Login</RouterLink>
      </li>
      <li>
        <RouterLink to="/register">Register</RouterLink>
      </li>
      <li>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
nav {
  background-color: #333;
  color: white;
}
ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
}
li {
  padding: 1rem;
}
a {
  color: white;
  text-decoration: none;
}
</style>
