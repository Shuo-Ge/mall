<template>
  <div id="detile">
    <DetileComps class="topBar"></DetileComps>
    <DetileSwiper :topImages="topImages"></DetileSwiper>
    <DetileBaseInfo :goods="goods"></DetileBaseInfo>
    <DetileShopInfo :shop="shop"></DetileShopInfo>
    <DetileGoodsInfo :imagesInfo="detailInfo"></DetileGoodsInfo>
  </div>
</template>

<script>
import DetileComps from "./detileComps/DetileComps.vue";
import DetileSwiper from "./detileComps/DetileSwiper.vue";

import DetileBaseInfo from "./detileComps/DetileBaseInfo.vue";
import DetileShopInfo from "./detileComps/DetileShopInfo.vue";
import DetileGoodsInfo from "./detileComps/DetileGoodsInfo.vue";

import SBatter from "components/common/scroll/Scroll.vue";

import { getDetile, Goods, Shop } from "network/detile";
export default {
  name: "Detile",
  components: {
    DetileComps,
    DetileSwiper,
    DetileBaseInfo,
    DetileShopInfo,
    DetileGoodsInfo,
    SBatter,
    getDetile,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetile(this.iid).then((res) => {
      // 获取顶部轮播图
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      console.log(data);
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);

      //保存商品的详情数据
      this.detailInfo = data.detailInfo;
    });
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 999;
  background-color: #fff;
}
</style>