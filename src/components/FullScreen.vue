<template>
    <div class="fullscreen-container">
      <img ref="image" :src="src" :alt="alt" @click="toggleFullscreen">
      <button class="fullscreen-button" @click="toggleFullscreen">Full Screen</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      }
    },
    methods: {
      toggleFullscreen() {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          this.$refs.image.requestFullscreen();
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .fullscreen-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .fullscreen-container img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
  }
  
  .fullscreen-button {
    position: absolute;
    bottom: 10px;
    right: -105px;
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
  .fullscreen-button:hover{
    background-position: left;
    cursor: pointer;
  }
  </style>
  