<template>
  <div>
    <Swiper>
      <SwiperItem
        v-for="(item, index) in topImages"
        :key="index"
        class="swiper-item"
      >
        <img :src="item" alt="" />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.swiper-item {
  height: 300px;
  /* overflow: hidden; */
}
</style>