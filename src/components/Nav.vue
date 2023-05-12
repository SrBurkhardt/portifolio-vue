<template>
    <nav class="navbar">
        <img :src="perfil" alt="perfil" class="perfil"/>
        <h1 class="titulo">Regione Burkhardt</h1>
            <ul>
                <li>
                    <router-link to="/" class="linksIniciais" exact-active-class="link-ativo">Home</router-link>
                </li>
                <li>
                    <router-link to="/stacks" class="linksIniciais" exact-active-class="link-ativo">Stacks</router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="linksIniciais" exact-active-class="link-ativo">Projetos</router-link>
                </li>
                <li>
                    <router-link to="/certificados" class="linksIniciais" exact-active-class="link-ativo">Certificados</router-link>
                </li>
                <li>
                    <a href="#contato" class="linksIniciais">Contato</a>
                </li>
            </ul>
        <footer>
            <ul class="navFooter">
                <li>
                    <a href="#linkedin">
                        <img :src="linkedin" alt="linkedin" class="icon-footer"/>
                    </a>
                </li>
                <li>
                    <a href="#instagram">
                        <img :src="instagram" alt="instagram" class="icon-footer"/>
                    </a>
                </li>
                <li>
                    <a href="#github">
                        <img :src="github" alt="github" class="icon-footer"/>
                    </a>
                </li>
            </ul>
            <p> &copy; TODOS OS DIREITOS RESERVADO </p>
        </footer>
    </nav>
</template>

<script>
import perfil from '../assets/perfil.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
export default {
    name: 'NavBar',
    data() {
        return{
            perfil: perfil,
            linkedin: linkedin,
            instagram: instagram,
            github: github
        }
    }
}
</script>

<style scoped>
.navbar {
    width: 20%;
    height: 100vh;
    background-color: rgb(0, 41, 65);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: fixed;
}
.perfil {
    width: 50%;
    margin-bottom: 20px;
}

.titulo {
    font-size: 1.3em;
    margin-bottom: 30px;
}
.navbar>ul {
    width: 100%;
    margin-bottom: 40px;
}
li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.linksIniciais {
    color: #fff;
    font-size: 1.1em;
    width: 100%;
    padding: 15px 0;
    text-align: center;
}
.linksIniciais:hover {
    color: aquamarine;
}

.link-ativo {
    background-color: rgb(0, 19, 31);
    color: aquamarine;
    width: 100%;
    padding: 15px 0;
    transition: 3s;
  }

footer {
    width: 100%;
    height: 100px;
    background-color: #555;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.navFooter {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
.icon-footer {
    width: 32px;
    margin: 0 10px;
}
p {
    font-size: 0.7em;
    margin-bottom: 15px;
}
</style>