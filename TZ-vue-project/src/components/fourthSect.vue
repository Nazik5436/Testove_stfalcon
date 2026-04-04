<template>
    <section class="fourth">
        <div class="container">
            <h2 class="fourth__title">
                Our blog posts
            </h2>
            <div class="fourth__grid">

                <article class="fourth__grid__card card--large">
                    <img src="@/assets/img/firstGrid.png" alt="Running" class="fourth__grid__card__img">
                    <div class="fourth__grid__card__overlay"></div>
                    <div class="fourth__grid__card__content">
                        <h3 class="fourth__grid__card__title">Return to running after pregnancy – Is your body strong enough for running?</h3>
                        <div class="fourth__grid__card__meta">
                            <img src="@/assets/img/avaGrid.png" alt="Author" class="fourth__grid__card__avatar">
                            <span>BY TILDA LOFTIN</span>
                            <span>JUNE 25, 2021</span>
                        </div>
                    </div>
                </article>

                <article class="fourth__grid__card">
                    <img src="@/assets/img/secondGrid.png" alt="Stroller" class="fourth__grid__card__img">
                    <div class="fourth__grid__card__overlay"></div>
                    <div class="fourth__grid__card__content">
                        <h3 class="fourth__grid__card__title">Stroller walks</h3>
                        <div class="fourth__grid__card__meta">APRIL 21, 2021</div>
                    </div>
                </article>

                <article class="fourth__grid__card">
                    <img src="@/assets/img/thirdGrid.png" alt="Playground" class="fourth__grid__card__img">
                    <div class="fourth__grid__card__overlay"></div>
                    <div class="fourth__grid__card__content">
                        <h3 class="fourth__grid__card__title">Playground workout</h3>
                        <div class="fourth__grid__card__meta">MARCH 17, 2020</div>
                    </div>
                </article>

                <article class="fourth__grid__card">
                    <img src="@/assets/img/fourthGrid.png" alt="Gear" class="fourth__grid__card__img">
                    <div class="fourth__grid__card__overlay"></div>
                    <div class="fourth__grid__card__content">
                        <h3 class="fourth__grid__card__title">Your Essential Fitness Gear for Each Trimester</h3>
                        <div class="fourth__grid__card__meta">FEBRUARY 21, 2021</div>
                    </div>
                </article>

                <article class="fourth__grid__card">
                    <img src="@/assets/img/fifthGrid.png" alt="Therapist" class="fourth__grid__card__img">
                    <div class="fourth__grid__card__overlay"></div>
                    <div class="fourth__grid__card__content">
                        <h3 class="fourth__grid__card__title">What YOU could gain by working with a Woman's Health Physical Therapist</h3>
                        <div class="fourth__grid__card__meta">JANUARY 23, 2020</div>
                    </div>
                </article>

            </div>
            
            <div class="fourth__bottom__text">
                <a href="#" class="fourth__bottom__text__link">
                    <span class="fourth__bottom__text__link__span">Like what you see? View more</span>
                    <img src="@/assets/icons/callToAct.svg" alt="icon" class="icon">
                </a>
            </div>

        </div>
    </section>
</template>
<style scoped lang="scss">

.container {
    padding: 0 15px;
}

.fourth {
    max-width: 1200px;
    margin: 0 auto;

    &__title {
        color: $dark-text;
        font-size: 50px;
        font-weight: 700;
        text-align: center;

        &::after {
            content: ''; 
            display: block;     
            width: 46px; 
            height: 4px; 
            background-color: $after-line;              
            margin: 21px auto 0;
            border-radius: 2px;
        }
    }

    .fourth__grid {
        padding: 80px 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 280px);
        gap: 20px;

        @media (max-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto; 
        }

        @media (max-width: 576px) {
            grid-template-columns: 1fr;
        }

        &__card {
            position: relative;
            border-radius: 14px; 
            overflow: hidden; 
            display: flex;
            flex-direction: column;
            justify-content: flex-end; 
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.18%, rgba(0, 0, 0, 0.60) 100%);

            &:hover .fourth__grid__card__img {
                transform: scale(1.05);
            }

            &:first-child {
                grid-column: 1 / 3;
                grid-row: 1 / 3;

                &__title {
                    font-size: 32px;
                    margin-bottom: 16px;
                }

                @media (max-width: 992px) {
                    grid-column: 1 / -1; 
                    grid-row: auto;
                }
            }

            &__img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover; 
                z-index: 1;
                transition: transform 0.4s ease; 
            }

            &__overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 60%; 
                background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
                z-index: 2;
            }

            &__content {
                position: relative;
                z-index: 3; 
                padding: 24px;
                color: #ffffff;
            }

            &__title {
                font-size: 20px; 
                font-weight: 700;
                line-height: 1.3;
                margin-bottom: 12px;
            }

            &__meta {
                display: flex;
                align-items: center;
                gap: 12px; 
                font-size: 12px;
                text-transform: uppercase;
                font-weight: 500;
                opacity: 0.9;
            }

            &__avatar {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                object-fit: cover;
            }
        }
    }

    &__bottom__text {
        text-align: center;

        &__link {
            display: inline-flex;
            position: relative;
            align-items: center;
            gap: 16px;    
            text-decoration: none;
            cursor: pointer; 
            transition: color 0.3s ease;

                &:hover .icon {
                    transform: translateX(6px);
                }

            &:hover{
                color: $primary-purple;
            }

            &::after{
                content: "";
                position: absolute;
                left: 50%;
                bottom: -3px;
                transform: translateX(-50%);
                width: 0;
                height: 2px;
                background-color: $primary-purple;
                transition: width 0.3s ease;
            }

            &:hover::after{
                width: 100%;
            }

            &__span {
                color: $dark-text;
                font-size: 24px;
                font-weight: 400;
                line-height: 160%;
            }
        }
    }
}

.icon {
    transition: transform 0.3s ease;
}

</style>