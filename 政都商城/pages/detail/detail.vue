<template>
	<view class="detail">
		<!-- 大图 -->
		<Swiper :carouselList="carouselList"></Swiper>
		<!-- 基础详情 -->
		<view class="p-2">
			<view class="d-flex j-sb a-center">
				<view class="font-lg">
					我是标题
				</view>
				<view style="margin-left: auto;"
					class="iconfont icon-dianzan text-light-muted font pl-1">
					123
				</view>
			</view>
			<view class="font text-light-muted mb-1 line-h-sm">
				描述违法完全给我确认好沟通会让他核桃仁和台湾和台湾和爱疯缺乏方位
			</view>
			<view class="">
				1200$
			</view>
		</view>
		<!-- 滑动 -->
		<Sliding></Sliding>
		<!-- 评论 -->
		<Comment></Comment>
		<CrossLine height="100upx"></CrossLine>
		<Tabbar></Tabbar>
		<Popup :showClass="showClass">
			<view class="">
				<Server></Server>
			</view>
		</Popup>
	</view>
</template>

<script>
	import Server from "./main/server.vue"
	import Sliding from "./main/sliding.vue"
	import Swiper from "./main/swiper.vue"
	import Comment from "./main/comment.vue"
	import Tabbar from "./main/tabbar.vue"
	import Popup from "@/components/popup/popup.vue"
	export default{
		components:{
			Sliding,
			Swiper,
			Comment,
			Tabbar,
			Popup,
			Server
		},
		methods:{
			closeClass(){
				this.showClass="hide"
			}
		},
		data(){
			return{
				showClass:"hide none",
				carouselList:[
					{
						url:"../../static/images/demo/demo4.jpg"
					},
					{
						url:"../../static/images/demo/demo4.jpg"
					},
					{
						url:"../../static/images/demo/demo4.jpg"
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail{
		height: 100%;
		overflow-y: scroll;
		&::-webkit-scrollbar {
		  display: none; /* Chrome Safari */
		}
	}
</style>
