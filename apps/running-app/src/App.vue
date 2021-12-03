<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>
