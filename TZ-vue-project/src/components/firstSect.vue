<template>
    <section class="first">
        <div class="container">
            <div class="first__right">
                <h1 class="first__right__title">Strong for life with us</h1>
                <p class="first__right__par">The best Pre/postnatal fitness app! 100 exercises divided in before, during and after pregnancy. Stay strong and healthy through all stages of pregnancy.</p>
                <div class="first__right__link">
                    <a href="https://www.apple.com/app-store/" target="_blank" class="first__right__link__item">
                    <img src="@/assets/img/AppStore.svg" alt="AppStore" >
                    </a>

                    <a href="https://play.google.com/" target="_blank" class="first__right__link__item">
                    <img src="@/assets/img/GooglePlay.svg" alt="Google play">
                    </a>
                </div>
            </div>
            <div class="first__left">
                <img src="@/assets/img/firstIphone.png" alt="Activites">
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"> 
.container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.first{
    max-width: 1240px;
    max-height: 770px;
    margin: 0 auto;
    background-image: url('@/assets/img/firstBG.svg');
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    border-radius: 40px; 
    padding: 106px 106px;

    .container{
        display: flex;
        align-items: center;
        justify-content: space-between; 
        gap: 40px;

        .first__right{

            &__title{

            }

            &__par{

            }

            &__link{

                &__item{
                            
                }
            }

        }

        .first__left{

        }
    }
}
</style>