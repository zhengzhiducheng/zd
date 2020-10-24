<template>
  <view class="recommend_list">
    <view class="title">
      <view class="name">{{listData.title}}</view>
      <view class="all">查看全部 》</view>
    </view>
    <view class="list" >
      <view class="item" v-for="(item,index) in listData.list" :key="index" >
        <image class="img" :src="item.url" :alt="index" lazy-load @click="goDetail(item,index)">
        <view class="name">
          <view class="shop">{{item.shop}}店</view>
          <view class="designation">{{item.name}}</view>
        </view>
        <view class="explain">
          <view class="currentPrice">{{item.currentPrice}}￥</view>
          <view class="oldPrice">{{item.oldPrice}}￥每{{item.unit}}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props:['listData'],
  methods: {
    goDetail(item, index) {
		uni.navigateTo({
			url:"/pages/detail/detail"
		})
    }
  }
};
</script>
<style lang="less" scoped>
.recommend_list {
  width: 100%;
  .title {
    font-family: circumference;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20rpx;
	height: 60rpx;
    .name {
      line-height: 20rpx;
      padding-left: 5rpx;
      height: 50rpx;
	  line-height: 50rpx;
      font-size: 32rpx;
      letter-spacing: 2rpx;
      background: linear-gradient(to right, red, green);
      -webkit-background-clip: text;
      color: transparent;
    }
    .all {
      line-height: 20rrpx;
      height: 20rpx;
      font-size: 15rrpx;
      color: gray;
      letter-spacing: 1rrpx;
    }
  }
  .list {
	box-sizing: border-box;
    padding: 10rpx 10rpx;
	overflow: hidden;
	clear: both;
    .item {
      width: 50%;
	  padding: 10rpx;
	  box-sizing: border-box;
	  &:nth-child(odd){
		 float: left;
	  }
	  &:nth-child(even){
	  	 float: right;
	  }
      .img {
        width: 100%;
		height:350rpx;
      }
      .name {
        padding: 5rpx 0;
        display: flex;
        align-items: center;
        font-size: 26rpx;
        .shop {
          padding: 0 5rpx;
          border-radius: 10rpx;
          background: pink;
          margin-right: 10rpx;
        }
        .designation {
          font-family: circumference;
          font-weight: 1000;
          flex: 1;
          font-size: 28rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .explain {
        font-size: 24rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .currentPrice {
          color: red;
          font-size: 28rpx;
          font-family: grass;
        }
        .oldPrice {
          text-decoration: line-through;
          font-size: 30rpx;
          font-family: grass;
        }
      }
    }
  }
}
</style>
