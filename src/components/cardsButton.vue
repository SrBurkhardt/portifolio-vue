<template>
    <div class="inicialContainer">
        <h1 class="lista-projetos">Lista de Projetos</h1>
        <div class="card" v-for="(stack, index) in dados" :key="index">
            <div class="card-header">
                <img :src="stack.img" alt="html" class="stacks">
            </div>
            <div class="card-body">
                <div class="title">
                    <h3>{{ stack.title }}</h3>
                </div>
                <div class="description">
                    <p>{{ stack.description }}</p>
                    <div class="button-container">
                        <button>Conferir</button>
                        <a :href="stack.link" target="_blank" class="icon-link">
                            <img :src="stack.github" alt="github" class="icon">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CardsButton',
        props: {
            dados: {
                type: Array,
                required: true
            }
        }
    }
</script>
<style scoped>
.inicialContainer {
    width: 80%;
    height: 100vh;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.lista-projetos {
    position: absolute;
    top: 40px;
    text-align: center;
    animation: lista 1s;
}
@keyframes lista {
    from {
        transform: translateX(1000%);
    }
    to {
        transform: translateX(0);
    }
}
.card {
    width: 250px;
    height: 390px;
    border: 1px solid black;
    margin: 15px 0 0 15px;
    border-radius: 10px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 5);
    animation: inicial 1s;
    position: relative;
    left: 251px;
}
@keyframes inicial {
    from {
        transform: translatey(100%);
    }
    to {
        transform: translatey(0);
    }
}
.card-header{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
.card-header>img{
    width: 180px;
}
.card-body {
    width: 100%;
    height: auto;
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
    height: auto;
    overflow-y: auto;
}

.description>p {
    font-size: .8em;
}
.button-container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 3px;
    bottom: 5px;
    padding: 10px;
}
.button-container> button{
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 800;
    background-image: linear-gradient(to right, #009100 50%, #0044ff 50%);
    background-size: 200% 100%;
    background-position: right;
    transition: background-position 0.8s ease-in-out;
}
.button-container> button:hover{
    background-position: left;
    cursor: pointer;
}
.icon {
    position: absolute;
    width: 32px;
    margin: 0 10px;
}
.icon-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 30px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #002941 50%, #fff 50%);
    background-size: 195% 100%;
    background-position: right;
    transition: background-position 0.8s ease-in-out;
    position: relative;
  } 
  
  .icon-link:hover {
    background-position: left;
  }
  

.stacks {
    width: 50%;
}
</style>