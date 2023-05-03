<template>
    <div class="inicialContainer">
        <div class="card">
            <div class="card-header">
                <img :src="html" alt="html" class="stacks">
            </div>
            <div class="card-body">
                <div class="title">
                    <h3>HTML 5</h3>
                </div>
                <div class="description">
                    <p>HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet.
                        Comecei a estudar html em 2014, foi com ela que Comecei a gostar de programação</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <img :src="css" alt="css" class="stacks">
            </div>
            <div class="card-body">
                <div class="title">
                    <h3>CSS 3</h3>
                </div>
                <div class="description">
                    <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.
                        O css eu utilizava dentro das tags html sem nem saber que era css, em 2016 foi que comecei a me aprofundar mais sobre a mesma.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <img :src="javascript" alt="javascript" class="stacks">
            </div>
            <div class="card-body">
                <div class="title">
                    <h3>JavaScript</h3>
                </div>
                <div class="description">
                    <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.
                        Comecei a estudar esta linguagem em 2019 logo após ingressar na faculdade de
                        Analise e Desenvolvimento de Sistemas.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <img :src="vue" alt="vue" class="stacks">
            </div>
            <div class="card-body">
                <div class="title">
                    <h3>Vue.js</h3>
                </div>
                <div class="description">
                    <p>Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única, a qual comecei a estudar em 2022</p>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import html from '@/assets/html-5.png'
import css from '@/assets/css-3.png'
import javascript from '@/assets/js.png'
import vue from '@/assets/baixados.png'

export default {
    name: 'StacksComponent',
    data() {
        return {
            html: html,
            css: css,
            javascript: javascript,
            vue: vue
        }
    }
}
</script>

<style>
.inicialContainer {
    position: absolute;
    width: 80%;
    height: 100vh;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.card {
    width: 250px;
    height: 350px;
    border: 1px solid black;
    margin: 15px 0 0 15px;
    border-radius: 10px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 5);
    position: relative;
    
}
.card-header{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
.card-body {
    width: 100%;
    overflow: hidden;
}
.title {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
.description {
    margin:10px;
    height: 190px;
}

.description>p {
    font-size: .8em;
}
.stacks {
    width: 50%;
}
</style>