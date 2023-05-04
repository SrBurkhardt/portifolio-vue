<template>
    <div class="Container">
        <CardsComponents :dados="dados"/>
    </div>
</template>
<script>
import CardsComponents from './Cards.vue'
import calculadora from '@/assets/projeto-calculadora.jpeg'
import lista from '@/assets/projeto-lista.jpeg'
import master from '@/assets/master-fitness.jpeg'

export default {
    name: 'ProjetosComponents',
    components: {
        CardsComponents
    },
    data() {
        return {
            dados: [
                {
                    img: calculadora,
                    title: 'Projeto Calculadora',
                    description: 'Meu Primeiro Projeto. Essa é a minha primeira calculadora desenvolvida com html, css e js simples, ela ntem muitos tratamentos'
                },
                {
                    img: lista,
                    title: 'Projeto lista ToDo',
                    description: 'Meu Segundo Projeto. O objetivo deste projeto é criar uma aplicação de lista de tarefas que permita aos usuários adicionar, marcar como concluída e remover tarefas.'
                },
                {
                    img: master,
                    title: 'Projeto Master Fitness',
                    description: 'Meu Terceiro Projeo. O objetivo deste projeto é criar um site informativo de uma academia, com a finalidade de mostrar o meu conhecimento em um desenvolvimento de um site responsivo. Site ficticio',
                }
            ]
        }
    }
}

</script>
<style>
.Container {
    background-color: #eee;
    position: absolute;
    width: 80%;
    height: 100vh;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.card-header>img{
    width: 200px;
    height: 150px;
}
</style>