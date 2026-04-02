<template>
    <section class="fourth">
        <div class="container">
            <h2 class="fourth__title">
                Our blog posts
            </h2>
            <div class="fourth__grid">

                <article class="card card--large">
                    <img src="@/assets/img/firstGrid.png" alt="Running" class="card__img">
                    <div class="card__overlay"></div>
                    <div class="card__content">
                        <h3 class="card__title">Return to running after pregnancy – Is your body strong enough for running?</h3>
                        <div class="card__meta">
                            <img src="@/assets/img/avaGrid.png" alt="Author" class="card__avatar">
                            <span>BY TILDA LOFTIN</span>
                            <span>JUNE 25, 2021</span>
                        </div>
                    </div>
                </article>

                <article class="card">
                    <img src="@/assets/img/secondGrid.png" alt="Stroller" class="card__img">
                    <div class="card__overlay"></div>
                    <div class="card__content">
                        <h3 class="card__title">Stroller walks</h3>
                        <div class="card__meta">APRIL 21, 2021</div>
                    </div>
                </article>

                <article class="card">
                    <img src="@/assets/img/thirdGrid.png" alt="Playground" class="card__img">
                    <div class="card__overlay"></div>
                    <div class="card__content">
                        <h3 class="card__title">Playground workout</h3>
                        <div class="card__meta">MARCH 17, 2020</div>
                    </div>
                </article>

                <article class="card">
                    <img src="/src/assets/img/fourthGrid.png" alt="Gear" class="card__img">
                    <div class="card__overlay"></div>
                    <div class="card__content">
                        <h3 class="card__title">Your Essential Fitness Gear for Each Trimester</h3>
                        <div class="card__meta">FEBRUARY 21, 2021</div>
                    </div>
                </article>

                <article class="card">
                    <img src="/src/assets/img/fifthGrid.png" alt="Therapist" class="card__img">
                    <div class="card__overlay"></div>
                    <div class="card__content">
                        <h3 class="card__title">What YOU could gain by working with a Woman's Health Physical Therapist</h3>
                        <div class="card__meta">JANUARY 23, 2020</div>
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
.container{
    padding: 0 15px;
}

.fourth{
    max-width: 1200px;
    margin: 0 auto;

    &__title{
        color: $dark-text;
        font-size: 50px;
        font-weight: 700;
        text-align: center;

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

    .fourth__grid{
        padding: 80px 0;

        &__grid {
            display: grid;
            /* МАГІЯ СІТКИ: 4 однакові колонки */
            grid-template-columns: repeat(4, 1fr);
            /* 2 рядки, наприклад, по 280px кожен */
            grid-template-rows: repeat(2, 280px);
            gap: 20px; /* Відстань між картками */

            /* Адаптив для планшетів (робимо 2 колонки) */
            @media (max-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto; /* Висота підлаштується сама */
            }

            /* Адаптив для телефонів (все в одну колонку) */
            @media (max-width: 576px) {
            grid-template-columns: 1fr;
            }
        }
    }
}

    .card {
        position: relative;
        border-radius: 16px; /* Заокруглення як на макеті */
        overflow: hidden; /* Щоб картинка не вилазила за заокруглені кути */
        display: flex;
        flex-direction: column;
        justify-content: flex-end; /* Притискаємо контент донизу */
        min-height: 280px;

    /* Ефект при наведенні (зум картинки) */
        &:hover .card__img {
            transform: scale(1.05);
        }

    /* --- Особливі стилі для ВЕЛИКОЇ картки --- */
        &--large {
            /* Кажемо їй зайняти від 1 до 3 лінії (тобто 2 колонки) і 2 рядки */
            grid-column: 1 / 3;
            grid-row: 1 / 3;

            /* Збільшуємо шрифти для великої картки */
            .card__title {
            font-size: 32px;
            margin-bottom: 16px;
            }

            /* Адаптив для планшетів: скасовуємо розтягнення, хай буде як усі */
            @media (max-width: 992px) {
            grid-column: 1 / -1; /* На всю ширину */
            grid-row: auto;
            }
        }

    /* Картинка на фоні */
    &__img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; /* Заповнює весь простір, не деформуючись */
        z-index: 1;
        transition: transform 0.4s ease; /* Плавність зуму */
    }

    /* Темний градієнт знизу для читабельності тексту */
    &__overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60%; /* Градієнт займає тільки нижню частину */
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
        z-index: 2;
    }

    /* Блок з текстом */
    &__content {
        position: relative;
        z-index: 3; /* Кладемо текст ПОВЕРХ градієнта */
        padding: 24px;
        color: #ffffff;
    }

    &__title {
        font-size: 20px; /* Розмір для маленьких карток */
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 12px;
    }

    &__meta {
        display: flex;
        align-items: center;
        gap: 12px; /* Відстань між аватаркою і датою */
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

.fourth__bottom__text{
    text-align: center;

    &__link{
        display: inline-flex;
        align-items: center;
        gap: 16px;    
        text-decoration: none;
        cursor: pointer; 

        &:hover{

            .icon {
            display: block;
            transform: translateX(6px);
            }
        }

        &__span{
            color: $dark-text;
            font-size: 24px;
            font-weight: 400;
            line-height: 160%;
        }
    }
}

.icon {
    transition: transform 0.3s ease;
}



</style>