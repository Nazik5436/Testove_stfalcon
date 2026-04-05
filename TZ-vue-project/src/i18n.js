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
        },

        apps: {
            appStore: 'App Store',
            googlePlay: 'Google Play'
        },

        firstSect: {
            title: 'Strong for life with us',
            description: 'The best Pre/postnatal fitness app! 100 exercises divided in before, during and after pregnancy. Stay strong and healthy through all stages of pregnancy.'
        },

        secondSect: {
            title: 'How does it work?',
            subtitle: 'Easy, fun & essential training for moms',
            browseTitle: 'Browse exercises',
            browseDesc: 'Browse over 100 exercises with a video or picture and a description.',
            timelineTitle: 'Create timeline',
            timelineDesc: 'Take pictures along the way during and after the pregnancy to see the transformation.'
        },

        thirdSect: {
            title: 'Before, during and after pregnancy',
            description: 'The app is divided into three different stages to help you choose appropriate exercises. Each exercise is carefully selected to ensure safe and appropriate adjustments to follow the pregnancy’s progress.'
        },

        thirdSectRight: {
            title: 'Before pregnancy',
            desc1: 'Start preparing for pregnancy with safe exercises that build up a strong body.',
            subtitle: 'Trimesters',
            desc2: 'The pregnancy is divided into first trimester, second trimester part 1 and 2, and third trimester part 1 and 2 to provide exercises that are safe for each stage of the pregnancy. Each exercise comes with a video and a description so you can safely perform each exercise. Simple put in your due date and you will be taken to the proper stage.'
        },

        thirdSectLeft: {
            title: 'During pregnancy',
            description: 'Working out during pregnancy has many benefits for both the mom and the baby. It can reduce back pain, help prevent gestational diabetes, promote good posture, strength and endurance, and also improve the ability to cope with labor.'
        },

        blog: {
            mainTitle: 'Our blog posts',
            post1: {
                title: 'Return to running after pregnancy – Is your body strong enough for running?',
                author: 'BY TILDA LOFTIN',
                date: 'JUNE 25, 2021'
            },
            post2: {
                title: 'Stroller walks',
                date: 'APRIL 21, 2021'
            },
            post3: {
                title: 'Playground workout',
                date: 'MARCH 17, 2020'
            },
            post4: {
                title: 'Your Essential Fitness Gear for Each Trimester',
                date: 'FEBRUARY 21, 2021'
            },
            post5: {
                title: "What YOU could gain by working with a Woman's Health Physical Therapist",
                date: 'JANUARY 23, 2020'
            },
            callToAct: 'Like what you see? View more'
        },

        fifthSect: {
            title: 'Send your data',
            button: 'Go to form'
        },

        footer: {
            about: 'About Us',
            blog: 'Blog',
            support: 'Support',
            terms: 'Terms & Conditions',
            privacy: 'Privacy Policy',
            cookies: 'Cookies'
        },

        form: {
            title: 'Send your data',
            firstName: 'First Name',
            secondName: 'Second Name',
            email: 'Email',
            address: 'Address',
            submit: 'Submit'
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
        },

        apps: {
            appStore: 'App Store',
            googlePlay: 'Google Play'
        },

        firstSect: {
            title: 'Stark för livet med oss', 
            description: 'Den bästa fitnessappen för pre/postnatal! 100 övningar uppdelade i före, under och efter graviditeten. Håll dig stark och frisk under alla stadier av graviditeten.'
        },

        secondSect: {
            title: 'Hur fungerar det?',
            subtitle: 'Enkel, rolig & viktig träning för mammor',
            browseTitle: 'Bläddra bland övningar',
            browseDesc: 'Bläddra bland över 100 övningar med video eller bild och en beskrivning.',
            timelineTitle: 'Skapa tidslinje',
            timelineDesc: 'Ta bilder längs vägen under och efter graviditeten för att se förvandlingen.'
        },

        thirdSect: {
            title: 'Före, under och efter graviditeten',
            description: 'Appen är uppdelad i tre olika stadier för att hjälpa dig välja lämpliga övningar. Varje övning är noggrant utvald för att säkerställa säkra och lämpliga anpassningar för att följa graviditetens framsteg.'
        },

        thirdSectRight: {
            title: 'Före graviditeten',
            desc1: 'Börja förbereda dig för graviditeten med säkra övningar som bygger upp en stark kropp.',
            subtitle: 'Trimestrar',
            desc2: 'Graviditeten är indelad i första trimestern, andra trimestern del 1 och 2, samt tredje trimestern del 1 och 2 för att erbjuda övningar som är säkra för varje stadium. Varje övning har en video och en beskrivning så att du kan utföra den säkert. Ange bara ditt beräknade förlossningsdatum så hamnar du i rätt fas.'
        },

        thirdSectLeft: {
            title: 'Under graviditeten',
            description: 'Att träna under graviditeten har många fördelar för både mamman och barnet. Det kan minska ryggsmärtor, hjälpa till att förebygga graviditetsdiabetes, främja en god hållning, styrka och uthållighet, samt även förbättra förmågan att klara av förlossningen.'
        },

        blog: {
            mainTitle: 'Våra blogginlägg',
            post1: {
                title: 'Återgång till löpning efter graviditeten – Är din kropp stark nog för löpning?',
                author: 'AV TILDA LOFTIN',
                date: '25 JUNI, 2021'
            },
            post2: {
                title: 'Barnvagnspromenader',
                date: '21 APRIL, 2021'
            },
            post3: {
                title: 'Lekplatsträning',
                date: '17 MARS, 2020'
            },
            post4: {
                title: 'Din oumbärliga träningsutrustning för varje trimester',
                date: '21 FEBRUARI, 2021'
            },
            post5: {
                title: 'Vad DU kan vinna på att arbeta med en fysioterapeut inom kvinnohälsa',
                date: '23 JANUARI, 2020'
            },
            callToAct: 'Gillar du det du ser? Visa mer'
        },

        fifthSect: {
            title: 'Skicka in dina uppgifter',
            button: 'Gå till formuläret'
        },

        footer: {
            about: 'Om oss',
            blog: 'Blogg',
            support: 'Kundtjänst', 
            terms: 'Användarvillkor', 
            privacy: 'Integritetspolicy',
            cookies: 'Cookies' 
        },

        form: {
            title: 'Skicka in dina uppgifter',
            firstName: 'Förnamn',
            secondName: 'Efternamn',
            email: 'E-post',
            address: 'Adress',
            submit: 'Skicka'
        }
    }
}

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en', 
    fallbackLocale: 'en',
    messages
})

export default i18n