<script setup>
import { ref } from 'vue'

const forms = ref({
    firstName: '',
    secondName: '',
    email: '',
    address: ''
})

const handleSubmit = () => {
    console.log('Зібрані дані:', forms.value)
    alert('Дані успішно відправлено! (дивись консоль)')

    forms.value = {
        firstName: '',
        secondName: '',
        email: '',
        address: ''
    }
}
</script>

<template>
    <section class="forms__section">
        <div class="container">
            <div class="forms__bocks">
                <h2 class="forms__title">Send your data</h2>
                
                <form @submit.prevent="handleSubmit" class="forms__bocks__osnova">
                <input 
                    type="text" 
                    v-model="forms.firstName" 
                    placeholder="First Name" 
                    class="forms__bocks__osnova__input" 
                    required 
                />
                <input 
                    type="text" 
                    v-model="forms.secondName" 
                    placeholder="Second Name" 
                    class="forms__bocks__osnova__input" 
                    required 
                />
                <input 
                    type="email" 
                    v-model="forms.email" 
                    placeholder="Email" 
                    class="forms__bocks__osnova__input" 
                    required 
                />
                <input 
                    type="text" 
                    v-model="forms.address" 
                    placeholder="Address" 
                    class="forms__bocks__osnova__input" 
                    required 
                />
                
                <button type="submit" class="forms__bocks__osnova__btn">Submit</button>
                </form>

            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

.container{
    padding: 0 15px;
    
}

.forms__section {
    max-width: 1240px;
    margin: 0 auto;
    margin-top: 77px;


    .forms__bocks {
        background-image: url('@/assets/img/formsBG.svg');
        background-size: cover;
        background-position: center;
        background-color: #A497C9; 
        border-radius: 14px;
        padding: 60px 0;
        text-align: center;

        .forms__title {
            color: $white;
            font-size: 50px;
            font-weight: 700;
            margin-bottom: 17px;
        }

        .forms__bocks__osnova {
            display: flex;
            margin: 0 auto;
            flex-direction: column; 
            max-width: 392px; 
            gap: 16px; 

            &__input {
                width: 100%;
                padding: 15px 0 15px 30px;
                border-radius: 38px;
                border: none;
                outline: none;
                font-size: 16px;
                border: 1px solid #C8C2C6;
                color: #888;
                background-color: $white;
                transition: box-shadow 0.3s ease;
                
                &:focus {
                box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4);
                }
    
                &::placeholder {
                color: #888;
                }
            }

            &__btn {
                width: 100%;
                margin-top: 24px;
                padding: 10px 24px;
                border-radius: 100px;
                border: none;
                background-color: $primary-purple;
                color: $white;
                font-size: 18px;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.3s ease, transform 0.2s ease;

                &:hover {
                background-color: #58418a;
                }
            }
        }
    }
}



    // @media (max-width: 576px) {
    //     .form-wrapper {
    //         padding: 40px 15px;
    //     }

    //     .form-title {
    //         font-size: 32px;
    //         margin-bottom: 30px;
    //     }
    // }
</style>