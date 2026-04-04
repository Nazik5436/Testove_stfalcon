<template>
    <section class="fifth">
        <div class="container">
            <div class="fifth__BG">
                <h2 class="fifth__BG__title">Send your data</h2>
                <RouterLink :to="{ name: 'forms' }" class="fifth__BG__btn">
                    Go to form
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.container{
    padding: 0 15px;
}

.fifth{
    max-width: 1200px;
    margin: 0 auto;

    .fifth__BG{
        background-image: url('/src/assets/img/fifthBG.svg'); 
        background-size: cover;
        background-position: center;
        background-color: #9b8ac6;
        border-radius: 14px;  
        padding: 102px 107px 102px 105px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        margin: 81px 0 60px 0;

        &__title{
            color: $white;
            font-size: 50px;
            font-weight: 700;
        }

        &__btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $primary-purple;
            color: $white;
            font-size: 18px;
            font-weight: 500;
            line-height: 28px;
            text-decoration: none;
            width: 392px;
            height: 58px;
            padding: 10px 12px;
            border-radius: 100px; 
            transition: background-color 0.3s ease, transform 0.3s ease;
            white-space: nowrap; 

            &:hover {
            background-color: #58418a; 
            }
        }
    }
}

</style>