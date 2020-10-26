<template>
	<view class="updataInfo">
		<view class="top-bar" >
			<image @tap="backOne" style="height: 30upx;width: 30upx;"
				src="/static/static_public_img/back.png"></image>
			<view class="center">个人资料</view>
			<view class="top-bar-right" @click="save">完成</view>
		</view>
		<view class="main">
			<ListItem title="头像">
				<view class="item">
					<Img></Img>
				</view>
			</ListItem>
			<ListItem title="签名">
				<view class="item">
					<input type="text" value="水电费" />
				</view>
			</ListItem>
			<ListItem title="昵称" @switchChange="nikname">
				<view class="item">
					<input type="text" value="政治都城" />
				</view>
			</ListItem>
			<ListItem title="性别">
				<view class="item">
					<radio value="1" :checked="from.radio==1"
						@click="from.radio = 1"/>男</label>
					<radio value="2" :checked="from.radio==2" 
						@click="from.radio = 2"/>女</label>
				</view>
			</ListItem>
			<ListItem title="生日">
				<view class="item">
					<input type="text" value="1998/05/02" />
				</view>
			</ListItem>
			<ListItem title="电话">
				<view class="item">
					<input type="text" value="18033833254" />
				</view>
			</ListItem>
			<ListItem title="邮箱">
				<view class="item">
					<input type="text" value="1529521620@qq.com" />
				</view>
			</ListItem>
		</view>
	</view>
</template>

<script>
	import Img from "./main/img.vue"
	import ListItem from "./main/listItem.vue";
	export default{
		data(){
			return{
				from:{
					radio:1
				}
			}
		},
		components:{
			ListItem,
			Img
		},
		methods:{
			//返回登录页面
			backOne(){
				uni.navigateBack({
				    delta: 1
				});
			},
			nikname(){
				console.log(1)
			},
			save(){
				uni.navigateBack({
				    delta: 1
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.userdata{
		height: 100%;
	}
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
	.main{
		.item{
			display: flex;
			align-items: center;
			margin-left: 20upx;
			font-size: 32upx;
			color: #6C757D;
			image{
				width: 120upx;
				height: 120upx;
				margin: 0;
			}
		}
	}
</style>

