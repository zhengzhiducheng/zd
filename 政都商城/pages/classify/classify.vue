<template>
	<view class="classify">
		<!-- 搜索 -->
		<Search leftWords="ZD" rightWords="搜索" input="input" :rightClick="search"></Search>
		<!-- <Loading :show="true"></Loading> -->
		<!-- 内容 -->
		<view class="main d-flex" style="height: 100%;">
			<view class="left border" >
				<view v-for="(item,index) in cate" :key="index"
					hover-class="bg-light-secondary"
					class="border-bottom border-light-secondary py-1">
					<view class="d-flex py-1 font-md text-muted j-center" 
						@click="change(index)"
						:class="index == page?'active':''">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="right border">
				<view class="row">
					<view class="span24-8 text-center py-2" v-for="(item,index) in commodityList" :key="index">
						<image :src="item.url" mode="widthFix" style="width: 150upx;height: 150upx;"></image>
						<text class="d-block">1</text>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 分割线 -->
		<CrossLine height="120upx"></CrossLine>
		<Tabbar class="tabbar"></Tabbar>
	</view>
</template>

<script>
	import Search from "@/components/search/search.vue"
	import Tabbar from "@/components/tabbar/tabbar.vue"
	export default {
		data(){
			return{
				page:0,
				cate:[{name:"分类一"},{name:"分类二"}],
				commodityList:[
					{
						url:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/134006/8/12935/86659/5f8f98d1Ea2cfc72a/78dbd2104cbbfd29.jpg!q70.dpg.webp",
						name:"商品"
					},
					{
						url:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/134006/8/12935/86659/5f8f98d1Ea2cfc72a/78dbd2104cbbfd29.jpg!q70.dpg.webp",
						name:"商品"
					},
					{
						url:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/134006/8/12935/86659/5f8f98d1Ea2cfc72a/78dbd2104cbbfd29.jpg!q70.dpg.webp",
						name:"商品"
					},
					{
						url:"https://img10.360buyimg.com/n2/s270x270_jfs/t1/134006/8/12935/86659/5f8f98d1Ea2cfc72a/78dbd2104cbbfd29.jpg!q70.dpg.webp",
						name:"商品"
					},
				]
					
			}
		},
		components:{
			Tabbar,
			Search
		},
		methods:{
			search(){
				
			},
			change(index){
				this.page = index
			}
		}
	}
</script>

<style lang='scss' scoped>
	.active{
		border-left: 8upx solid red;
		color:red!important ;
	}
	.classify{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		&::-webkit-scrollbar {
		  display: none; /* Chrome Safari */
		}
		
		.tabbar{
			position: fixed;
			width: 100%;
			left: 0;
			bottom: 0;
		}
		.main{
			flex: 1;
			overflow: hidden;
			.left{
				flex: 1;
				overflow-y: scroll;
				height: 100%;
				box-sizing: border-box;
				&::-webkit-scrollbar {
				  display: none; /* Chrome Safari */
				}
			}
			.right{
				flex: 3.5;
				box-sizing: border-box;
				height: 100%;
				overflow-y: scroll;
				&::-webkit-scrollbar {
				  display: none; /* Chrome Safari */
				}
			}
		}
		
	}
</style>
