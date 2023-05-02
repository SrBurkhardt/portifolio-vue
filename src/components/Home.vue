<template>
    <div class="Container">
        <img :src="euy" alt="euy" class="euy"/>
        <h1 class="front">Front End</h1>
        <h1 class="dev">Developer</h1>
        <p class="frase">Transforme suas ideias em realidade! Desenvolvimento front-end de alto nível com HTML5, CSS3, JavaScript, Vue e React! </p>
        <ul class="redes">
            <li>
                <a href="#linkedin">
                    <img :src="linkedin" alt="linkedin" class="icon"/>
                </a>
            </li>
            <li>
                <a href="#instagram">
                    <img :src="instagram" alt="instagram" class="icon"/>
                </a>
            </li>
            <li>
                <a href="#github">
                    <img :src="github" alt="github" class="icon"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import euy from '@/assets/euy.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'


export default {
    name: 'HomeComponent',
    data(){
        return{
            euy: euy,
            linkedin: linkedin,
            instagram: instagram,
            github: github
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
.euy {
    width: 39%;
    position: absolute;
    right: 0;
}
.front {
    font-size: 2.5em;
    font-weight: bold;
    margin-left: 70px;
}
.dev {
    font-size: 2.5em;
    font-weight: bold;
    margin-left: 70px;
}
.frase{
    width: 40%;
    font-size: 1.1em;
    margin:20px 0 0 70px;
}
.redes {
    display: flex;
    width: 30%;
    margin: 20px 0 0 50px;
}
</style>