<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { UsgsVueSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  UsgsVueSample,
  // }
});
</script>

<template>
  <div id="app">
    <usgs-vue-sample />
  </div>
</template>
