<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const dropdown = ref(false)
const closeDropdown = () => {
  dropdown.value = false
}

const lang = ref(false)
const currentLang = ref('Eng')
const selectLang = (tongue) => {
  currentLang.value = tongue
}
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
          <a href="#" class="nav__link">About</a>
          <a href="#" class="nav__link">Service</a>
          <a href="#" class="nav__link">Blog</a>
          <a href="#" class="nav__link">Contact</a>
        </nav>
        <div class="actions">

          <div class="left__act">
            <button @click="dropdown = !dropdown" class="left__act__btn">
              Download
            </button>

            <div class="left__act__dropdown" v-if="dropdown">
              <a href="https://www.apple.com/app-store/" target="_blank" class="left__act__dropdown__item" @click="closeDropdown">
                App Store
              </a>
              <a href="https://play.google.com/" target="_blank" class="left__act__dropdown__item" @click="closeDropdown">
                Google Play
              </a>
            </div>
          </div>

          <div class="right__act">
            <button @click="lang = !lang" class="lang__btn">
            <span class="lang__text">{{ currentLang }}</span>
            <i 
              class="fa-solid fa-chevron-down arrow" 
              :class="{ 'rotated': lang }"
            ></i>
            </button>

            <div class="lang__dropdown" v-if="lang">
      
              <div class="lang__dropdown__item" @click="selectLang('Sve')">
                <span class="lang__dropdown__item__flag">
                  <img src="/src/assets/icons/sweden.svg" alt="SVE">
                </span>
                <span class="lang__dropdown__item__name">Sverige</span>
              </div>

              <div class="lang__dropdown__item" @click="selectLang('Eng')">
                <span class="lang__dropdown__item__flag">
                  <img src="/src/assets/icons/UK.svg" alt="UK">
                </span>
                <span class="lang__dropdown__item__name">English</span>
              </div>
            
            </div>
          </div>

        </div>
      </div>

    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: $white;
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
          position: relative;
          text-decoration: none;
          color: $dark-text;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;

          &:hover {
            color: $primary-purple;
          }

          &::after{
            content: "";
            position: absolute;
            left: 50%;
            bottom: -1px;
            transform: translateX(-50%);
            width: 0;
            height: 2px;
            background-color: $primary-purple;
            transition: width 0.3s ease;
          }

          &:hover::after{
            width: 100%;
          }
        }
      }

      .actions{
        display: flex;
        justify-content: center;
        gap: 38px;

        .left__act{
          position: relative;
          display: inline-block;

          .left__act__btn {
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
            color: $white;
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

          .left__act__dropdown{
            position: absolute;
            top: 120%;
            left: 0;
            background-color: $white;
            min-width: 160px;
            border-radius: 12px;
            box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
            display: flex;
            flex-direction: column;
            padding: 8px 0;
            z-index: 10;

            .left__act__dropdown__item{
              color: $dark-text;
              font-size: 14px;
              font-weight: 400;
              line-height: 28px;
              padding: 7px 12px;
              cursor: pointer;
              text-decoration: none;
              transition: background-color 0.2s, color 0.2s;

              &:hover {
                background-color: #f5f5f5;
                color: $primary-purple;
              }
            }
          }
        }

        .right__act{
          position: relative;

          .lang__btn{
            background: none;
            border: none;
            font-size: 18px;
            font-weight: 400;
            line-height: 28px;
            color: $dark-text;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px;

            .lang__text{
              display: inline-block;
              width: 36px;
              text-align: left;
            }

            .arrow {
              color: $primary-purple;
              transition: transform 0.3s ease;
            }

            .arrow.rotated {
                transform: rotate(180deg);
            }
          }

          .lang__dropdown{
            position: absolute;
            top: 120%;
            right: 4;
            background: $white;
            border-radius: 12px;
            box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
            padding: 12px 0;
            min-width: 150px;
            z-index: 20;

            .lang__dropdown__item{
              display: flex;
              align-items: center;
              gap: 12px;
              padding: 10px 20px;
              cursor: pointer;
              transition: background-color 0.2s;

              &:hover {
                background-color: #f5f5f5;
              }

              .lang__dropdown__item__flag{
                font-size: 20px;
              }

              .lang__dropdown__item__name{
                color: $dark-text;
                font-size: 14px;
                font-weight: 400;
                line-height: 28px;
              }
            }
          }
        }
      }
    }
  }
}
</style>