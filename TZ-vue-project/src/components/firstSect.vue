<template>
    <section class="first">
        <div class="container">
            <div class="first__right">
                <h1 class="first__right__title">Strong for life with us</h1>
                <p class="first__right__par">The best Pre/postnatal fitness app! 100 exercises divided in before, during and after pregnancy. Stay strong and healthy through all stages of pregnancy.</p>
                <div class="first__right__link">
                    <a href="https://www.apple.com/app-store/" target="_blank">
                    <img src="@/assets/img/AppStore.svg" alt="AppStore">
                    </a>

                    <a href="https://play.google.com/" target="_blank">
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
    // padding: 106px 0 106px 106px;
    margin-top: 88px;

    .container{
        display: flex;
        align-items: center;
        justify-content: space-between; 
        gap: 55px;

        .first__right{
            padding: 106px 0 230px 106px;

            &__title{
                color: $dark-text;
                max-width: 498px;
                font-size: 56px;
                font-weight: 700;
                line-height: normal;
                margin-bottom: 58px;
                text-align: left;

                &::after{
                    content: ''; 
                    display: block;     
                    width: 46px; 
                    height: 4px; 
                    background-color: #ff4b60;              
                    margin-top: 21px;
                    border-radius: 2px;
                }
            }

            &__par{
                color: $dark-text;
                max-width: 500px;
                font-size: 24px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%;
                margin-bottom: 37px;
            }

            &__link{
                display: flex;
                justify-content: space-between;
                max-width: 380px;
                gap: 40px;
            }

        }

        .first__left{
            padding: 106px 0 0 0;
        }
    }
}
</style>