<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const dropdown = ref(false)
</script>

<template>
  <header class="header">

    <div class="container">

      <div class="left__part">
        <RouterLink to="/" class="logo">
          <h3>LOGO</h3>
        </RouterLink>
      </div>

      <div class="right__part">
        <nav class="nav">
          <RouterLink to="/" class="nav__link">Home</RouterLink>
          <a href="#" class="nav-link">About</a>
          <a href="#" class="nav-link">Service</a>
          <a href="#" class="nav-link">Blog</a>
          <a href="#" class="nav-link">Contact</a>
        </nav>
        <div class="actions">
          <button @click="dropdown = !dropdown" class="btn">
            Download
          </button>

          <div class="dropdown__menu" v-if="dropdown">
            <a href="https://www.apple.com/app-store/" target="_blank" class="dropdown__menu__item">
              App Store
            </a>
            <a href="https://play.google.com/" target="_blank" class="dropdown__menu__item">
              Google Play
            </a>
          </div>

        </div>
      </div>

    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: #fff;
  padding: 28px 0 23px 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    .left__part{

      .logo {
        color: $primary-purple;
        font-size: 40px;
        font-weight: 700;
        text-decoration: none;
      }
    }

    .right__part{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav {
        display: flex;
        gap: 24px;
        margin: 0 33px 0 0;

        &__link {
          color: $dark-text;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          text-decoration: none;
          transition: color 0.3s;
          cursor: pointer;

          &:hover {
            color: $primary-purple;
          }
        }
      }

      .actions{
        display: flex;
        gap: 38px;

        .btn {
          width: 174px;
          height: 44px;
          padding: 10px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 100px;
          background: $primary-purple;
          color: var(--white, #FFF);
          text-align: center;
          font-size: 18px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          border: none;
          transition: opacity 0.3s;
          cursor: pointer;

          &:hover {
            opacity: 0.9;
          }
        }
      }
    }
  }
}
</style>