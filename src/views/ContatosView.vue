<template>
    <NavBar />
    <ContatoComponent />
</template>

<script>
import NavBar from '@/components/Nav.vue'
import ContatoComponent from '@/components/Contatos.vue'

export default {
    name: 'ContatoView',
    components: {
        NavBar,
        ContatoComponent
    }
}
</script>