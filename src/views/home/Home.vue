<template>
  <div id="home">
    <NavBar class="home-nav"> <div slot="center">购物街</div> </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";

import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  created() {
    //请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>