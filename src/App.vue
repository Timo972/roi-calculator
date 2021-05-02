<template>
    <router-view />
</template>

<script lang="ts">
import 'mdb-vue-ui-kit/css/mdb.min.css'
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    },
})
</script>


<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
}
</style>
