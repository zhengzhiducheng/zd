<template>
	<view class="userpath">
		<!-- 导航占位 -->
		<CrossLine height="110upx"></CrossLine>
		<!-- 导航 -->
		<TapBar :isShow="isShow" :changeIsShow="changeIsShow"></TapBar>
		<!-- <Paths></Paths> -->
		<view class="path">
			<view class="item">
				<uni-list-item title="楚绵" showNote extraStyle="width:10%"
				titleStyle="display:flex;color:#F06B0B;font-size:20upx;">
					<block slot="title">
						<text class="mx-1 text-secondary">158****531</text> 
						<text>[默认]</text>
					</block>
					<block slot="note">
						<text>广东 广州 白云区 \n XXXX街道</text>
					</block>
				</uni-list-item>
				<view class="right" v-show="isShow">
					<button size="mini" type="warn">删除</button>
				</view>
			</view>
			
		</view>
		<view class="add" v-show="isShow">
			<button type="default" size="mini" @click="go"
			>添加新发货地址</button>
		</view>
	</view>
</template>

<script>
	import uniListItem from "./main/uni-list-item.vue";
	import TapBar from "./main/topBar.vue"
	export default {
		components: {
			TapBar,
			uniListItem
		},
		data() {
			return {
				// 显示按钮
				isShow:false
			}
		},
		
		methods: {
			//返回登录页面
			backOne: function(){
				uni.navigateBack({
				    delta: 1
				});
			},
			changeIsShow(){
				this.isShow =!this.isShow
			},
			go(){
				uni.navigateTo({
					url:"/pages/addressEeditor/addressEeditor"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.userpath{
		.add{
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.path{
			.item{
				position: relative;
				.right{
					position: absolute;
					right: 20upx;
					top:0;
					height: 100%;
					display: flex;
					align-items: center;
				}
			}
		}
	}
</style>
