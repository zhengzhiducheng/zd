<template>
	<view class="mainCat" ref="scor">
		<view class="chat-ls" v-for="(item,index) in talkList" :key="index">
			<view class="chat-time" v-if="spaceTime(item.time,new Date())">
				{{changeTime(spaceTime(item.time,new Date()))}}
			</view>
			<!-- 虚拟数据默认b为自己 -->
			<view class="msg-m msg-right" v-if="item.id == 'b'">
				<image :src="item.url" class="userImg"></image>
				<!-- 文本 -->
				<view class="message" v-if="item.types == 0">
					<view class="text">
						{{item.message}}
					</view>
				</view>
				<!-- 图片 -->
				<view class="img" v-if="item.types == 1">
					<image :src="item.message" @click="previewImg(item.message)"></image>
				</view>
			</view>
			<view class="msg-m msg-left" v-if="item.id !== 'b'">
				<image :src="item.url"  class="userImg"></image>
				<!-- 文本 -->
				<view class="message" v-if="item.types == 0">
					<view class="text">
						{{item.message}}
					</view>
				</view>
				<!-- 图片 -->
				<view class="img" v-if="item.types == 1">
					<image :src="item.message" @click="previewImg(item.message)"></image>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import Tool from "@/common/tool"
	export default{
		props:['talkList'],
		computed:{
			previewImgList(){
				let ary = []
				this.talkList.forEach(v=>{
					if(v.types == 1){
						ary.push(v.message)
					}
				})
				return ary
			}
		},
		mounted(){
			this.chudi()
		},
		methods:{
			chudi(){
				this.$refs.scor.$el.scrollTop = this.$refs.scor.$el.scrollHeight
			},
			changeTime(data){
				return Tool.dateTime(data)
			},
			spaceTime(old,news){
				return Tool.spaceTime(old,news)
			},
			previewImg(url){
				let index = this.previewImgList.indexOf(url)
				uni.previewImage({
				    count: index,
					urls:this.previewImgList,
				    longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.mainCat{
		padding: 0 32upx;
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		&::-webkit-scrollbar {
		  display: none; /* Chrome Safari */
		}
		.chat-ls{
			.chat-time{
				font-size: 24upx;
				padding-top: 20upx;
				text-align: center;
			}
			.msg-left{
				flex-direction: row;
				.text{
					line-height: 1.5;
					margin-left: 16upx;
					background-color: #FFFFFF;
					text-align: justify;
					text-justify: newspaper;
					word-break: break-all;
					margin-top: 10upx;
					border-radius: 0upx 20upx 20upx 20upx;
				}
			}
			.msg-right{
				flex-direction: row-reverse;
				.text{
					margin-right: 16upx;
					margin-top: 10upx;
					background-color: #FD6801;
					line-height: 1.5;
					text-align: justify;
					text-justify: newspaper;
					word-break: break-all;
					border-radius: 20upx 0upx 20upx 20upx;
				}
			}
			.msg-m{
				display: flex;
				padding: 20upx 0;
				.userImg{
					width: 90upx;
					height: 90upx;
					border-radius: 20upx;
				}
				.message{
					max-width: 480upx;
					.text{
						padding: 16upx 24upx;
						font-size: 32upx;
					}
				}
				.img{
					width: 100%;
					max-width: 480upx;
					image{
						box-sizing: border-box;
						padding: 0upx 16upx;
					}
				}
				
			}
		}
	}
</style>
