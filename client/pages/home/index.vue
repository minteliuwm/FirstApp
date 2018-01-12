<template>
  <div>
    <div>My name is {{name}}</div>
    <button @click="getNameByRequest">请求姓名</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

const MODULE_NAME = 'home';

export default {
  name: 'home',
  computed: {
    ...mapState(MODULE_NAME, ['name'])
  },
  methods: {
    ...mapActions(MODULE_NAME, ['getNameByRequest'])
  }
}
</script>
