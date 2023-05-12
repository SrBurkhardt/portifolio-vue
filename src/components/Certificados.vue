<template>
    <div class="inicialContainer">
        <h1 class="lista-certificados">Certificados</h1>
        <div class="certificado" v-for="(certificados, index) in dados" :key="index">
            <full-screen-image class="img" :src="certificados.certificado" alt=""></full-screen-image>
            <div class="info">
                
                <h1>{{ certificados.title }}</h1>
                <p>{{ certificados.info }}</p>

            </div>
        </div>
    </div>
</template>
<script>
import CertificadoWebModerno from '@/assets/CertificadoWebModerno.jpg'
import FullScreenImage from '@/components/FullScreen.vue'

    export default {
        name: 'CertificadosComponents',
        components: {
            FullScreenImage
        },
        data() {
            return {
                dados: [
                    {
                        certificado: CertificadoWebModerno,
                        title: 'Curso JavaScript',
                        info: 'Domine Web com 15 Cursos + Projetos: Javascript Angular React Next Vue Node HTML CSS jQuery Bootstrap Webpack Gulp MySQL'
                    }
                ]
            }
        }
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
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.lista-certificados {
    position: absolute;
    top: 40px;
    left: 40px;
    animation: lista 1s;
}
@keyframes lista {
    from {
        transform: translatey(-100%);
    }
    to {
        transform: translatey(0);
    }
  }
.certificado{
    width: 70%;
    display: flex;
    border-radius: 5px;
    padding: 5px;
    background-color: aliceblue;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, .5);
}
.certificado> .img{
    width: 100%;
}
.certificado> .info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
}

.certificado> .info> h1{
    font-size: 2em;
    margin-bottom: 15px;
}

</style>