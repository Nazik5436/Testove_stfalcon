<template>
    <section class="fourth">
        <div class="container">
            <h2 class="fourth__title">
                Our blog posts
            </h2>
            <div class="fourth__grid">

                <article class="card card--large">
                    <img src="/src/assets/img/firstGrid.png" alt="Running" class="card__img">
                    <div class="card__overlay"></div>
                    <div class="card__content">
                        <h3 class="card__title">Return to running after pregnancy – Is your body strong enough for running?</h3>
                        <div class="card__meta">
                            <img src="" alt="Author" class="card__avatar">
                            <span>BY TILDA LOFTIN</span>
                            <span>JUNE 25, 2021</span>
                        </div>
                    </div>
                </article>

                <article class="card">
                    <img src="@/assets/img/stroller.jpg" alt="Stroller" class="card__img">
                    <div class="card__overlay"></div>
                    <div class="card__content">
                        <h3 class="card__title">Stroller walks</h3>
                        <div class="card__meta">APRIL 21, 2021</div>
                    </div>
                </article>

                <article class="card">
                    <img src="@/assets/img/playground.jpg" alt="Playground" class="card__img">
                    <div class="card__overlay"></div>
                    <div class="card__content">
                        <h3 class="card__title">Playground workout</h3>
                        <div class="card__meta">MARCH 17, 2020</div>
                    </div>
                </article>

                <article class="card">
                    <img src="@/assets/img/gear.jpg" alt="Gear" class="card__img">
                    <div class="card__overlay"></div>
                    <div class="card__content">
                        <h3 class="card__title">Your Essential Fitness Gear for Each Trimester</h3>
                        <div class="card__meta">FEBRUARY 21, 2021</div>
                    </div>
                </article>

                <article class="card">
                    <img src="@/assets/img/therapist.jpg" alt="Therapist" class="card__img">
                    <div class="card__overlay"></div>
                    <div class="card__content">
                        <h3 class="card__title">What YOU could gain by working with a Woman's Health Physical Therapist</h3>
                        <div class="card__meta">JANUARY 23, 2020</div>
                    </div>
                </article>

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

</style>