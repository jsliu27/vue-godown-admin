<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Eline />
    <a-button type="primary">
      Primary
    </a-button>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
      >
        <a :href="item.href">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { userListData } from '@/api/user';
import Eline from './echarts/Eline.vue';

@Component({
  components: {
    Eline,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private list: object[] = [];

  private mounted() {
    userListData().then((res: any) => {
      const { code, data, message } = res;
      if (code === 1) {
        this.list = data;
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
