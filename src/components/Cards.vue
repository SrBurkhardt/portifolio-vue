<template>
    <div class="inicialContainer">
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
          <div class="buttom">
            
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'CardsComponents',
        props: {
            dados: {
                type: Array,
                required: true
            }
        }
    }
</script>
<style>
.card {
    width: 250px;
    height: 370px;
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
    overflow-y: auto;
}

.description>p {
    font-size: .8em;
}
.stacks {
    width: 50%;
}
</style>