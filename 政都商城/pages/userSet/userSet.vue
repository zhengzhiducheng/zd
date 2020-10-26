<template>
	<view class="userSet">
		<view class="top-bar" >
			<image @tap="backOne" style="height: 30upx;width: 30upx;"
				src="/static/static_public_img/back.png"></image>
			<view class="center">设置</view>
			<view class="top-bar-right"></view>
		</view>
		<!-- 账号管理 -->
		<Card title="账号管理" :titleWeight="false" 
		bodyStyle="background:#FFFFFF;" headBorderBottom>
			<ListItem title="个人资料"
			@click="navigate('userData')"></ListItem>
			<ListItem title="收货地址"
			@click="navigate('userPath')"></ListItem>
		</Card>
		<!-- 关于 -->
		<Card title="关于" :titleWeight="false" 
		headBorderBottom bodyStyle="background:#FFFFFF;">
			<ListItem title="关于商城"></ListItem>
			<ListItem title="协议规则"></ListItem>
			<ListItem title="资质证件"></ListItem>
			<ListItem title="用户协议"></ListItem>
			<ListItem title="隐私政策"></ListItem>
		</Card>
		<!-- 退出 -->
		<view class="p-3 d-flex j-center a-center" style="margin-top: auto;">
			<view class="rounded bg-white border w-100 text-center py-2 font-md"
			hover-class="bg-light-secondary">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	import Card from './main/card.vue';
	import ListItem from "./main/listItem.vue";
	export default {
		components:{
			Card,
			ListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			backOne(){
				uni.navigateBack({
				    delta: 1
				});
			},
			navigate(str){
				uni.navigateTo({
					url: `/pages/${str}/${str}`,
				});
			}
		}
	}
</script>

<style scoped lang="scss">
page{ background: #EEEEEE; }
.userSet{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.top-bar{
		display: flex;
		justify-content: space-between;
		height: 100upx;
		padding-top: 30upx;
		padding-left: 30upx;
		padding-right: 30upx;
		align-items: center;
		border-bottom: 2upx solid #CCCCCC;
		.center{
			font-size: 34upx;
		}
	}
}
</style>
