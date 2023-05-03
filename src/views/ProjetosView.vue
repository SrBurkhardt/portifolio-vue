<template>
    <div>
        <NavBar />
        <ProjetosComponents />
    </div>
</template>
<script>
import NavBar from '@/components/Nav.vue';
import ProjetosComponents from '@/components/Projetos.vue'

export default {
    name: 'ProjetosView',
    components: {
        ProjetosComponents,
        NavBar
    }
}
</script>