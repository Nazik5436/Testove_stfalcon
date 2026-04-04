import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        nav: {
        home: 'Home',
        about: 'About',
        service: 'Service',
        blog: 'Blog',
        contact: 'Contact'
        },
        buttons: {
        download: 'Download'
        }
    },
    sv: {
        nav: {
        home: 'Hem',
        about: 'Om oss',
        service: 'Tjänster',
        blog: 'Blogg',
        contact: 'Kontakt'
        },
        buttons: {
        download: 'Ladda ner'
        }
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'en', 
    fallbackLocale: 'en',
    messages
})

export default i18n