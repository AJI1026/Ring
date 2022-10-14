<template>
    <div class="home-container">
        <!-- 轮播图部分 -->
        <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in swipelist" :key="index">
            <img :src="item" class="swipe-item" />
          </van-swipe-item>
        </van-swipe>
        <router-view></router-view>
        <!-- 分类部分 -->
        <div class="sortPart">
          <van-image></van-image>
          <van-image></van-image>
          <van-image></van-image>
        </div>
    </div>
</template>

<script>
import { swipedata } from '@/api/goods'

export default {
    data() {
       return {
        swipelist:[]
       }
    },
    methods: {
        // 轮播图数据
        async getSwipe(data) {
            const Data = await swipedata(data)
            for (let i = 0; i < 3; i++) {
              this.swipelist.push(Data.data.result.list[i].swiperImgs)
            }
            console.log(this.swipelist)
        }
    },
    created() {
        this.getSwipe()
    },
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  .swipe-item {
    width: 100%;
    height: 360px;
  }
</style>