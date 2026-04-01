<template>
    <div class="container">
        <section class="first">
            <div class="first__right">
                <h1 class="first__right__title">Strong for life with us</h1>
                <p class="first__right__par">The best Pre/postnatal fitness app! 100 exercises divided in before, during and after pregnancy. Stay strong and healthy through all stages of pregnancy.</p>
                <div class="first__right__link">
                    <a href="https://www.apple.com/app-store/" target="_blank" class="first__right__link__item">
                    <img src="/src/assets/img/AppStore.svg" alt="AppStore" >
                    </a>

                    <a href="https://play.google.com/" target="_blank" class="first__right__link__item">
                    <img src="/src/assets/img/GooglePlay.svg" alt="Google play">
                    </a>
                </div>
            </div>
            <div class="first__left">
                <img src="/src/assets/img/firstIphone.png" alt="Activites">
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        padding: 0 15px;

        .first{
        min-height: 100vh;
        display: flex;
        align-items: center;
        background-image: url('/src/assets/img/');
        background-repeat: no-repeat;
        background-size: cover; 
        background-position: center;
        padding: 80px 0; 
        border-radius: 40px;

            .first__right{

                .first__right__title{

                }

                .first__right__par{

                }

                .first__right__link{

                    .first__right__link__item{
                        
                    }
                }

            }

            .first__left{

            }
        }
    }
</style>