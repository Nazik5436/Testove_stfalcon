<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/" class="logo">
        LOGO
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Service</a>
        <a href="#" class="nav-link">Blog</a>
        <a href="#" class="nav-link">Contact</a>
      </nav>

      <div class="actions">
        <RouterLink to="/form" class="btn-primary">
          Go to form
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: #fff;
  padding: 20px 0;
  border-bottom: 1px solid #eee;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: $dark-bg; // Використовуємо твою змінну!
  }

  .nav {
    display: flex;
    gap: 30px;

    &-link {
      text-decoration: none;
      color: $text-gray; // Твоя змінна
      font-weight: 500;
      transition: color 0.3s;

      &:hover {
        color: $primary-purple;
      }
    }
  }

  .btn-primary {
    background-color: $primary-purple; // Твоя змінна
    color: white;
    padding: 12px 25px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>