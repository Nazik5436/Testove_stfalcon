<script setup>
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<template>
    <footer class="footer"> 
        <div class="footer__container"> 
        
            <div class="footer__inner">
                
                <div class="footer__logo">
                    <a class="footer__logo-link" href="#" @click.prevent="scrollToTop">
                        LOGO
                    </a>
                </div>

                <nav class="footer__nav">
                    <ul class="footer__list">
                        <li><RouterLink to="/about" class="footer__link">About Us</RouterLink></li>
                        <li><RouterLink to="/blog" class="footer__link">Blog</RouterLink></li>
                        <li><RouterLink to="/support" class="footer__link">Support</RouterLink></li>
                    </ul>
                </nav>

                <nav class="footer__nav">
                    <ul class="footer__list">
                        <li><a href="#" class="footer__link">Terms & Conditions</a></li>
                        <li><a href="#" class="footer__link">Privacy Policy</a></li>
                        <li><a href="#" class="footer__link">Cookies</a></li>
                    </ul>
                </nav>

                <div class="footer__socials">
                    <a href="#" class="footer__social-link" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="footer__social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="footer__social-link" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    <a href="#" class="footer__social-link" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
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
    color: #ffffff;
    margin-top: 160px;
}

.footer__container {
    max-width: 1200px;
    margin: 0 auto;
    // padding: 0 15px;
}

.footer__inner {
    display: flex;
    justify-content: space-between; 
    align-items: flex-start; 
    flex-wrap: wrap; 
    gap: 36px; 
}


.footer__logo-link {
    font-size: 28px;
    font-weight: 800;
    color: #ffffff;
    text-decoration: none;
    letter-spacing: 1px;
}


.footer__list {
    list-style: none; 
    display: flex;
    flex-direction: column; 
    gap: 16px; 
}

.footer__link {
    color: #e0e0e0; 
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
        color: #ffffff; 
        text-decoration: underline;
    }
}


.footer__socials {
    display: flex;
    gap: 20px; 
}

.footer__social-link {
    color: #ffffff;
    font-size: 24px; 
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
        transform: translateY(-4px); 
        color: #ff4b60; 
    }
}


// @media (max-width: 768px) {
//   .footer__inner {
//     flex-direction: column; 
//     align-items: center; 
//     text-align: center;
//     gap: 32px;
//   }

//   .footer__list {
//     align-items: center;
//   }
// }
</style>