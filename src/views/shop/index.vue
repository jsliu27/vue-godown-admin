<template>
  <div>
    商品列表
  </div>
</template>

<script lang="ts">
import { productList } from '@/api/product';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Shop extends Vue {
  // 商品列表
  private shopList: object[] = [];

  // 页面加载之前
  private beforeCreate() {
    const params = {
      pageNum: 1,
      pageSize: 20,
    };
    productList(params).then((res: any) => {
      const { success, data, message } = res;
      if (success) {
        const { records } = data;
        this.shopList = records;
      } else {
        this.$message.error(message);
      }
    }).catch((error: any) => {
      console.log(error);
    });
  }
}
</script>

<style scoped>

</style>
