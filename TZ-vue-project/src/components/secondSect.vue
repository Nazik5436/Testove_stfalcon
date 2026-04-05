<template>
    <section class="second" id="service">
        <div class="container"> 

            <div class="first__text">
                <h2 class="first__text__title">{{ $t('secondSect.title') }}</h2>
                <p class="first__text__par">{{ $t('secondSect.subtitle') }}</p>            
            </div>
            <div class="first__options">
                <div class="first__options__icon">
                    <img src="@/assets/icons/search.svg" alt="icon">
                </div>
                <div class="first__options__text">
                    <h3 class="first__options__text__title">{{ $t('secondSect.browseTitle') }}</h3>
                    <p class="first__options__text__par">{{ $t('secondSect.browseDesc') }}</p>                
                </div>
                <div class="first__options__icon">
                    <img src="@/assets/icons/timeline.svg" alt="icon">
                </div>
                <div class="first__options__text">
                    <h3 class="first__options__text__title">{{ $t('secondSect.timelineTitle') }}</h3>
                    <p class="first__options__text__par">{{ $t('secondSect.timelineDesc') }}</p>                
                </div>
            </div>
            
        </div>
    </section>
</template>

<style scoped lang="scss">
.container{
    padding: 0 15px;
}

.second{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 160px;

    .first__text{
        display: flex;
        flex-direction: column;
        gap: 24px;

        &__title{
            color: $dark-text;
            text-align: center;
            font-size: 50px;
            font-weight: 700;
        }

        &__par{
            color: $light-text;
            text-align: center;
            font-size: 32px;
            font-weight: 500;

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

    .first__options{
        display: flex;
        align-items: flex-start;
        gap: 41px;
        margin: 60px 0 160px 0;

        &__icon{
            border-radius: 50%;
            box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
            padding: 16px;
            cursor: pointer;
        }

        &__text{
            display: flex;
            flex-direction: column;
            gap: 5px;

            &__title{
                color: $dark-text;
                font-size: 32px;
                font-weight: 500;
                text-align: left;   
            }

            &__par{
                max-width: 497px;
                color: $light-text;
                font-size: 18px;
                font-weight: 400;
                line-height: 28px;
                text-align: left;
            }
        }
    }
}
</style>