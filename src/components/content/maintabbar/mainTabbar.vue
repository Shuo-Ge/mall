<template>
  <Tabbar>
    <TabbarItem path="/home" activeColor="deepPink">
      <div slot="item-icon">
        <img src="~assets/img/tabbar/home.svg" alt="" />
      </div>
      <div slot="item-icon-activity" class="iconfont">
        <img src="~assets/img/tabbar/home_active.svg" alt="" />
      </div>
      <div slot="item-text">首页</div>
    </TabbarItem>
    <TabbarItem path="/category" activeColor="deepPink">
      <div slot="item-icon" class="iconfont">
        <img src="~assets/img/tabbar/category.svg" alt="" />
      </div>
      <div slot="item-icon-activity" class="iconfont">
        <img src="~assets/img/tabbar/category_active.svg" alt="" />
      </div>
      <div slot="item-text">分类</div>
    </TabbarItem>
    <TabbarItem path="/cart" activeColor="deepPink">
      <div slot="item-icon" class="iconfont">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" />
      </div>
      <div slot="item-icon-activity" class="iconfont">
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
      </div>
      <div slot="item-text">购物车</div>
    </TabbarItem>
    <TabbarItem path="/profile" activeColor="deepPink">
      <div slot="item-icon" class="iconfont">
        <img src="~assets/img/tabbar/profile.svg" alt="" />
      </div>
      <div slot="item-icon-activity" class="iconfont">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" />
      </div>
      <div slot="item-text">我的</div>
    </TabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar.vue";

import TabbarItem from "components/common/tabbar/TabbarItem.vue";
export default {
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style>
</style>