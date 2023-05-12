<template>
    <div>
        <NavBar />
        <CertificadosComponents />
    </div>
</template>
<script>
import NavBar from '@/components/Nav.vue'
import CertificadosComponents from '@/components/Certificados.vue'

export default {
    name: 'CertificadosView',
    components: {
        NavBar,
        CertificadosComponents
    }
}

</script>