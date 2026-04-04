<template>
    <section class="third">
        <div class="container">

            <div class="third__text">
                <h2 class="third__text__title">Before, during and after pregnancy</h2>
                <p class="third__text__par">The app is divided into three different stages to help you choose appropriate exercises. Each exercise is carefully selected to ensure safe and appropriate adjustments to follow the pregnancy’s progress.</p>
            </div>

            <div class="third__first__block">

                <div class="third__first__block__right">
                    <h3 class="third__first__block__right__title">Before pregnancy</h3>
                    <p class="third__first__block__right__par">Start preparing for pregnancy with safe exercises that build up a strong body.</p>
                    <p class="third__first__block__right__par">Trimesters</p>
                    <p class="third__first__block__right__par">The pregnancy is divided into first trimester, second trimester part 1 and 2, and third trimester part 1 and 2 to provide exercises that are safe for each stage of the pregnancy. Each exercise comes with a video and a description so you can safely perform each exercise. Simple put in your due date and you will be taken to the proper stage.</p>
                </div>

                <div class="third__first__block__left">
                    <div class="third__first__block__left__BG"></div>
                    <img src="@/assets/img/secondPhone.png" alt="Iphone" class="third__first__block__left__phone">
                </div>

            </div>

            <div class="third__second__block">

                <div class="third__second__block__right">
                    <div class="third__second__block__right__BG"></div>
                    <img src="@/assets/img/thirdPhone.png" alt="Iphone" class="third__second__block__right__phone">
                </div>

                <div class="third__second__block__left">
                    <h3 class="third__second__block__left__title">During pregnancy</h3>
                    <p class="third__second__block__left__par">Working out during pregnancy has many benefits for both the mom and the baby. It can reduce back pain, help prevent gestational diabetes, promote good posture, strength and endurance, and also improve the ability to cope with labor.</p>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped lang="scss">
.container{
    padding: 0 15px;
}

.third{
    max-width: 1200px;
    margin: 0 auto;
    position: relative; 
    z-index: 1; 
    overflow: hidden; 

    &::before {
        content: 'Healthy';
        position: absolute;
        top: 58%; 
        left: 63%;
        transform: translate(-50%, -50%);
        z-index: -1;
        font-size: clamp(60px, 15vw, 215px);
        font-weight: 800;
        color: #F8F7FC;
        pointer-events: none;
        user-select: none;
        }

    &__text{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 24px;

        &__title{
            color: $dark-text;
            font-size: 50px;
            font-weight: 700;
        }

        &__par{
            color: $light_text;
            font-size: 32px;
            font-weight: 500;
            line-height: normal;

            &::after{
                content: ''; 
                display: block;     
                width: 46px; 
                height: 4px; 
                background-color: $after-line;              
                margin: 21px auto 0;
                border-radius: 2px;
            }
        }
    }

    &__first__block{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 124px;
        gap: 138px;

        &__left{
            position: relative; 
            width: 546px;
            height: 546px;

            &__BG{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-image: url('@/assets/img/secondBG.svg');
                background-size: cover;
                background-position: center;
                border-radius: 40px;
                z-index: 1;
            }

            &__phone{
                position: absolute;
                z-index: 2;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -56.4%);
                height: 115%;
                width: auto;
                max-width: none;
            }
        }

        &__right{

            &__title{
                color: $dark-text;
                font-size: 40px;
                font-weight: 700;

                &::after{
                    content: ''; 
                    display: block;     
                    width: 46px; 
                    height: 4px; 
                    background-color: $after-line;              
                    margin: 13px 0 24px 0;
                    border-radius: 2px;
                }
            }

            &__par{
                color: $light-text;
                max-width: 556px;
                font-size: 18px;
                font-weight: 400;
                line-height: 28px;

                &:nth-child(3){
                    font-size: 32px;
                    font-weight: 500;
                    margin: 16px 0 5px 0;
                }
            }
        }
    }

    .third__second__block{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 99px 0 160px 0;
        gap: 90px;

        .third__second__block__right{
            position: relative;
            width: 546px; 
            height: 546px;
            display: flex;
            justify-content: center;
            align-items: center;  

            &__BG{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0; 
                background-image: url('/src/assets/img/thirdBG.svg');
                background-size: cover;
                background-position: center;
                border-radius: 40px;
                z-index: 1;
            }

            &__phone{
                position: relative;
                z-index: 2;
                top: 50%;
                left: 50%;
                transform: translate(-80%, -50%); 
                width: auto;
            }
        }

        &__left{
            text-align: left;

            &__title{
                color: $dark-text;
                font-size: 40px;
                font-weight: 700;

                &::after{
                    content: ''; 
                    display: block;     
                    width: 46px; 
                    height: 4px; 
                    background-color: $after-line;              
                    margin: 13px 0 24px 0;
                    border-radius: 2px;
                }
            }

            &__par{
                color: $light-text;
                max-width: 498px;
                font-size: 18px;
                font-weight: 400;
                line-height: 28px;
            }
        }
    }
}
</style>