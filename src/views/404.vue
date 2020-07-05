<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button
        type="primary"
        @click="go_back_handle"
        >
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Nopage extends Vue {
    // 路由回退
    private go_back_handle() {
      this.$router.go(-1);
    }
  }
</script>

<style scoped>

</style>
