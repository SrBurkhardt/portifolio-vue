<template>
<div class="inicialContainer">
    <h1 class="title">Contato</h1>
    <div class="redes-container">
        <div class="email">
            <form>
                    <label for="name">Nome:</label>
                    <input type="text" id="name" v-model="name">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email">
                    <label for="subject">Assunto:</label>
                    <input type="text" id="subject" v-model="subject">
                    <label for="message">Mensagem:</label>
                    <textarea id="message" v-model="message"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
        <div class="redes">
            <a href="https://www.linkedin.com/in/regione-burkhardt/" target="_blank">
                <img :src="linkedin" alt="linkedin" class="icon">
            </a>
            <a href="https://www.instagram.com/regioneburkhardt/" target="_blank">
                <img :src="instagram" alt="instagram" class="icon">
            </a>
            <a href="https://api.whatsapp.com/send?phone=5585987154004" target="_blank">
                <img :src="whatsapp" alt="whatsapp" class="icon">
            </a>
        </div>
    </div>
</div>
</template>

<script>
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'

export default {
    name: 'ContatoComponent',
    data() {
        return {
            linkedin: linkedin,
            instagram: instagram,
            whatsapp: whatsapp
        }
    },
}
</script>

<style scoped>
.inicialContainer {
    width: 80%;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
}
.title {
    text-align: center;
}
.redes-container {
    width: 80%;
    margin-left: 100px;
    display: flex;
}

.icon {
    width: 64px;
    margin: 32px;
}

.email{
    width: 50%;
}
form {
    display: flex;
    flex-direction: column;
}
label {
    font-size: 1.2em;
    margin-bottom: 5px;
}
#name,#subject,#email {
    height: 30px;
    padding-left: 10px;
}
#message {
    height: 100px;
    padding: 10px;
    margin-bottom: 20px;
}
button{
    padding: 10px;
    background-color: #0044ff;
    color: #fff;
    border-radius: 5px;
    font-size: 1.2em;
    cursor: pointer;
}
.redes {
    display: flex;
    flex-direction: column;
}
</style>
