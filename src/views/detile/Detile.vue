<template>
  <div id="detile">
    <DetileComps class="topBar"></DetileComps>
    <DetileSwiper :topImages="topImages"></DetileSwiper>
    <DetileBaseInfo :goods="goods"></DetileBaseInfo>
    <DetileShopInfo :shop="shop"></DetileShopInfo>
    <DetileGoodsInfo :imagesInfo="detailInfo"></DetileGoodsInfo>
    <DetailParamInfo :paramInfo="paramInfo"></DetailParamInfo>
    <DetileCommentInfo :commentInfo="commentInfo"></DetileCommentInfo>
    <GoodsList :goods="recommends"></GoodsList>
  </div>
</template>

<script>
import DetileComps from "./detileComps/DetileComps.vue";
import DetileSwiper from "./detileComps/DetileSwiper.vue";
import DetileBaseInfo from "./detileComps/DetileBaseInfo.vue";
import DetileShopInfo from "./detileComps/DetileShopInfo.vue";
import DetileGoodsInfo from "./detileComps/DetileGoodsInfo.vue";
import DetailParamInfo from "./detileComps/DetailParamInfo.vue";
import DetileCommentInfo from "./detileComps/DetileCommentInfo.vue";

import SBatter from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import {
  getDetile,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detile";
export default {
  name: "Detile",
  components: {
    DetileComps,
    DetileSwiper,
    DetileBaseInfo,
    DetileShopInfo,
    DetileGoodsInfo,
    DetailParamInfo,
    DetileCommentInfo,
    SBatter,
    getDetile,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
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

      // 获取参数信息;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      // 请求推荐数据
      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    });
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 99;
  background-color: #fff;
}
</style>