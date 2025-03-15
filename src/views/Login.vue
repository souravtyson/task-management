<template>
  <div class="login-container">
    <h2>Login Page</h2>
    <form>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
label {
  font-weight: bold;
}
input {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
}
button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #555;
}
button:active {
  background-color: #777;
}
</style>
