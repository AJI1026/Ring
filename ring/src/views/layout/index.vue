<template>
    <div class='layoutPage-container'>
      <router-view></router-view>
      <van-tabbar route>
        <van-tabbar-item replace to="/home">
          <i slot="icon" class="iconfont icon-shouye"></i>
          <span>首页</span>
        </van-tabbar-item>
        <van-tabbar-item replace to="/sort">
          <i slot="icon" class="iconfont icon-fenleiorguangchangorqita"></i>
          <span>分类</span>
        </van-tabbar-item>
        <van-tabbar-item replace to="/cart">
          <i slot="icon" class="iconfont icon-gouwuchekong"></i>
          <span>购物车</span>
        </van-tabbar-item>
         <van-tabbar-item replace to="/my">
          <i slot="icon" class="iconfont icon-geren"></i>
          <span>我的</span>
        </van-tabbar-item>
      </van-tabbar>
    </div>
</template>
    
<script>
    export default {
      name: 'layoutPage',
      components: {},
      data () {
        return {
          
        }
      },
      computed: {},
      watch: {},
      methods: {
    
      },
      created () {
    
      },
      mounted () {
    
      }
    }
</script>
    
<style scoped lang="less">
    .layout-container {
        .tabbar-container {
          height: 104px;
          .iconfont {
            font-size: 50px;
          }
          span {
            font-size: 20px;
          }
        }
      }
</style>