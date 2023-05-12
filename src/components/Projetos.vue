<template>
    <div>
        <CardsButton :dados="dados"/>
    </div>
</template>
<script>
import CardsButton from './cardsButton.vue'
import github from '@/assets/github.png'
import calculadora from '@/assets/projeto-calculadora.jpeg'
import lista from '@/assets/projeto-lista.jpeg'
import master from '@/assets/master-fitness.jpeg'

export default {
    name: 'ProjetosComponents',
    components: {
        CardsButton
    },
    data() {
        return {
            dados: [
                {
                    img: calculadora,
                    title: 'Projeto Calculadora',
                    description: 'Meu Primeiro Projeto. Essa é a minha primeira calculadora desenvolvida com html, css e js simples, ela ntem muitos tratamentos',
                    github: github,
                    link: 'https://github.com/SrBurkhardt/Calculadora-1.0.git'
                },
                {
                    img: lista,
                    title: 'Projeto lista ToDo',
                    description: 'Meu Segundo Projeto. O objetivo deste projeto é criar uma aplicação de lista de tarefas que permita aos usuários adicionar, marcar como concluída e remover tarefas.',
                    github: github,
                    link: 'https://github.com/SrBurkhardt/ListaDeTarefa.git'
                },
                {
                    img: master,
                    title: 'Projeto Master Fitness',
                    description: 'Meu Terceiro Projeo. O objetivo deste projeto é criar um site informativo de uma academia, com a finalidade de mostrar o meu conhecimento em um desenvolvimento de um site responsivo. Site ficticio',
                    github: github,
                    link: 'https://github.com/SrBurkhardt/master-fitness.git'
                }
            ]
        }
    }
}

</script>
<style scoped>
.icon {
    width: 32px;
    margin: 0 10px;
}
.card-header>img{
    width: 200px;
    height: 150px;
}
</style>