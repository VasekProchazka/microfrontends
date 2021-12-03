<template>
  <div>
    <div>
      <h3>iframe solution</h3>
      <iframe src="http://localhost:8083"> </iframe>
    </div>

    <div>
      <h3>module federation plugin solution</h3>
      <HelloWorld />
    </div>
  </div>
</template>

<script>
import HelloWorld from 'app1/HelloWorld';

export default {
  name: "App",
  components: {
    HelloWorld
    // HelloWorld: () => import('app1/HelloWorld')
  },
};
</script>
