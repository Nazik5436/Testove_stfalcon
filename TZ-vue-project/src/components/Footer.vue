<script setup>
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<template>
    <footer class="footer" id="contacts"> 
        <div class="container"> 
        
            <div class="footer__block">
                
                <div class="footer__logo">
                    <a class="footer__block__logo__link" href="#" @click.prevent="scrollToTop">
                        LOGO
                    </a>
                </div>

                <div class="footer__block__div">
                    <ul class="footer__block__div__list">
                        <li><a href="#" class="footer__block__div__list__link">{{ $t('footer.about') }}</a></li>
                        <li><a href="#" class="footer__block__div__list__link">{{ $t('footer.blog') }}</a></li>
                        <li><a href="#" class="footer__block__div__list__link">{{ $t('footer.support') }}</a></li>
                    </ul>
                </div>

                <div class="footer__block__div">
                    <ul class="footer__block__div__list">
                        <li><a href="#" class="footer__block__div__list__link">{{ $t('footer.terms') }}</a></li>
                        <li><a href="#" class="footer__block__div__list__link">{{ $t('footer.privacy') }}</a></li>
                        <li><a href="#" class="footer__block__div__list__link">{{ $t('footer.cookies') }}</a></li>
                    </ul>
                </div>

                <div class="footer__block__socials">
                    <a href="#" class="footer__block__socials__link" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="footer__block__socials__link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="footer__block__socials__link" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    <a href="#" class="footer__block__socials__link" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
                </div>

            </div>
            
        </div>
    </footer>
</template>

<style scoped lang="scss">
.conteiner{
    padding: 0 15px;
}

.footer {
    background-color: #3e3a47; 
    width: 100%;
    padding: 74px 78px; 
    color: $white;
    margin-top: 100px;

    .footer__block {
        display: flex;
        align-items: flex-start; 
        flex-wrap: wrap; 
        gap: 36px; 
        max-width: 1150px;
        margin: 0 auto; 

        &__logo__link {
            color: $white;
            font-size: 40px;
            font-weight: 700;
            text-decoration: none;
            margin-right: 56px;
        }

        &__div{
            width: 286px;

            &__list{
                display: flex;
                flex-direction: column; 
                list-style: none; 

                &__link{
                    position: relative;
                    color: $white; 
                    font-size: 24px;    
                    font-weight: 400;
                    line-height: 50px;
                    text-decoration: none;
                    transition: color 0.3s ease;

                    &:hover {
                        color: $white;
                    }

                    &::after{
                        content: "";
                        position: absolute;
                        left: 50%;
                        bottom: -5px;
                        transform: translateX(-50%);
                        width: 0;
                        height: 2px;
                        background-color: $white;
                        transition: width 0.3s ease;
                    }

                    &:hover::after{
                        width: 100%;
                    }
                }
            }
        }

        &__socials{
            display: flex;
            gap: 20px;

            &__link{
                color: $white;
                font-size: 24px; 
            }

        }
    }
}
</style>