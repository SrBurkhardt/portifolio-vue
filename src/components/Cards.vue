<template>
    <div class="inicialContainer">
      <h1 class="lista-stacks">Lista de Projetos</h1>
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
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import github from '@/assets/github.png'
    export default {
        name: 'CardsComponents',
        dados: {
          github: github
        },
        props: {
            dados: {
                type: Array,
                required: true
            }
        }
    }
</script>
<style scoped>
.lista-stacks {
  position: absolute;
  top: 40px;
  margin-left: 40px;
  text-align: center;
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
.card {
  width: 250px;
  height: 370px;
  border: 1px solid black;
  margin: 15px 0 0 15px;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 5);
  background-image: linear-gradient(to right, #002941 50%, #fff 50%);
  background-size: 200% 100%;
  background-position: right;
  transition: background-position 0.8s ease-in-out;
  animation: inicial 1s;
}
.card:hover {
  background-position: left;
  color: #fff;
}
@keyframes inicial {
  from {
      transform: translatex(100%);
  }
  to {
      transform: translatex(0);
  }
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
    overflow-y: auto;
}

.description>p {
    font-size: .8em;
}
.stacks {
    width: 50%;
}
</style>