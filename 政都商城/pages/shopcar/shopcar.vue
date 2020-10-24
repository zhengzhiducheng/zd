<template>
	<view class="shopcar">
		<!-- 顶部导航 -->
		<NavBar :right-text="isedit?'完成':'编辑'" 
			title="购物车" :statusBar="true" :fixed="true"
			@click-right="isedit = !isedit"
			:shadow="false" left-text="返回" color="#ffffff"></NavBar>
		<view class="car">
			<CrossLine height="20upx"></CrossLine>
			<view class="" >
				<Nothing v-if="!list"></Nothing>
				<!-- 列表 -->
				<view v-else>
					<block v-for="(item,index) in list" :key="index">
						<view class="d-flex py-3 a-center j-sb border-bottom border-top border-light-secondary animated fadeIn faster ">
							<Checkbox :checked="item.selected"
								v-show="isedit"
								@change="selectItem(index,$event)">
							</Checkbox>
							<image :src="item.titlepic" mode="widthFix"
								style="width: 200upx;height: 200upx;"
								class="mx-2 rounded">
							</image>
							<view class="a-self-stretch d-flex flex-column j-center flex-1">
								<view class="text-dark font-md" 
								style="font-size: 35upx;"> {{item.title}} </view>
								<view class="text-secondary font mb-2 d-flex a-center rounded py-1"
								@tap.stop="editAttrs(item,index)"> 
									<block v-for="(attr,idx) in item.attrs" :key="idx">
										<text class="mr-1">
										{{attr.list[attr.selected].name}}
										</text>
									</block>
								</view>
								<view class="d-flex j-sb" style="box-sizing: border-box;padding-right: 20upx;">
									<view class="d-flex main-text-color line-h font-weight mb-1 a-self-start" style="font-size: 35upx;">
										<view class="font a-self-start line-h font-weight-100">￥</view>
										{{item.pprice}}
									</view>
									<Numberbox :min="1" :max="item.maxnum" :value="item.num" @change="Sum(index,$event)">
									</Numberbox>
								</view>
							</view>
						</view>
					</block>
				</view>
				
			</view>
			<!-- 合计 -->
			<Total :checkAll="checkAll"
			:totalNum="totalNum"
			:totalPrice="totalPrice"
			:isedit="isedit"
			@change="chooseAll"
			@submit="submit"
			@fava="removeFava"
			@delect="delect"></Total>
			<CrossLine height="100upx"></CrossLine>
		</view>
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	import Total from './main/total.vue'
	import Checkbox from './main/checkbox.vue'
	import Numberbox from './main/numberbox.vue'
	import Nothing from './main/nothing.vue'
	import NavBar from "@/components/navBar/navBar.vue"
	import Tabbar from '@/components/tabbar/tabbar.vue'
	export default {
		components:{
			Tabbar,
			NavBar,
			Nothing,
			Checkbox,
			Numberbox,
			Total
		},
		computed:{
			totalPrice:{
				get(){
					let num = this.list.reduce((pre,next)=>{
						return pre + next.num * next.pprice
					},0)
					return num
				},
				set(){
					
				}
				
			}
		},
		data() {
			return {
				showChooseClass:"",
				AttrSelects:[],// 当前编辑商品属性
				editObj:{},// 当前编辑对象
				// 是否编辑状态
				isedit:false,
				// 选中商品对象
				selectedList:[],
				// 购物车列表
				list:[
					{
						selected:false,
						id:11,
						title:"商品标题111",
						titlepic:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7c946930-bcf2-11ea-b997-9918a5dda011.png",
						// 选中商品属性
						attrs:[
							{
								title:"颜色",
								selected:0,
								list: [
									{ name:'火焰红', },
									{ name:'炭黑', },
									{ name:'冰川兰', }
								]
							},
							{
								title:"容量",
								selected:0,
								list: [
									{ name:'64GB', },
									{ name:'128GB', },
								]
							},
							{
								title:"套餐",
								selected:0,
								list: [
									{ name:'标配', },
									{ name:'套餐一', },
									{ name:'套餐二', }
								]
							},
						],
						pprice:336,
						num:1,
						minnum:1,
						maxnum:10, // 该商品最大商品数，跟库存有关
					},
					{
						selected:false,
						id:12,
						title:"商品标题222",
						titlepic:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7c946930-bcf2-11ea-b997-9918a5dda011.png",
						// 选中商品属性
						attrs:[
							{
								title:"颜色",
								selected:0,
								list: [
									{ name:'火焰红', },
									{ name:'炭黑', },
									{ name:'冰川兰', }
								]
							},
							{
								title:"容量",
								selected:0,
								list: [
									{ name:'64GB', },
									{ name:'128GB', },
								]
							},
							{
								title:"套餐",
								selected:0,
								list: [
									{ name:'标配', },
									{ name:'套餐一', },
									{ name:'套餐二', }
								]
							},
						],
						pprice:365,
						num:10,
						minnum:1,
						maxnum:10, // 该商品最大商品数，跟库存有关
					},
					{
						selected:false,
						id:13,
						title:"商品标题333",
						titlepic:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7c946930-bcf2-11ea-b997-9918a5dda011.png",
						// 选中商品属性
						attrs:[
							{
								title:"颜色",
								selected:0,
								list: [
									{ name:'火焰红', },
									{ name:'炭黑', },
									{ name:'冰川兰', }
								]
							},
							{
								title:"容量",
								selected:0,
								list: [
									{ name:'64GB', },
									{ name:'128GB', },
								]
							},
							{
								title:"套餐",
								selected:0,
								list: [
									{ name:'标配', },
									{ name:'套餐一', },
									{ name:'套餐二', }
								]
							},
						],
						pprice:10,
						num:1,
						minnum:1,
						maxnum:10, // 该商品最大商品数，跟库存有关
					}
				],
				// 是否全选
				checkAll:false,
				// 合计
				totalNum:0
			};
		},
		methods: {
			// 进入编辑状态
			Edit(){
				this.isedit = !this.isedit;
			},
			// 修改商品属性
			editAttrs(item,index){
				// 初始化Popup
				this.AttrSelects = item.attrs;
				this.editObj = item;
				// 显示
				this.showPopup();
			},
			showPopup() {
				this.showChooseClass = 'show';
			},
			hidePopup(){
				this.showChooseClass = 'hide';
				setTimeout(() => {
					this.AttrSelects = [];
					this.editObj = {};
					this.showChooseClass = 'none';
				}, 200);
			},
			// 单选
			labelsSelect(index,val){
				this.AttrSelects[index].selected = val;
			},
			// 筛选数量变化
			AttrNumChange(e){
				this.editObj.num = e;
			},
			// 移入收藏
			removeFava(){
				
			},
			// 删除
			delect(){
				for (let i = 0; i < this.selectedList.length; i++) {
					let id = this.selectedList[i];
					let index = this.list.findIndex((obj)=>{
						return obj.id === id;
					});
					// 清除商品列表
					this.list.splice(index,1);
				}
				// 清除选中列表
				this.selectedList = [];
				this.Sum();
			},
			// 选中商品
			selectItem(index,val){
				// 设置当前商品选中状态
				this.list[index].selected = !this.list[index].selected;
				// 查询选中的列表中是否包含当前商品id
				let i = this.selectedList.indexOf(this.list[index].id);
				// 存在移除，不存在增加
				i>-1?this.selectedList.splice(i, 1):this.selectedList.push(this.list[index].id);
				// 选中全部
				this.checkAll = this.selectedList.length === this.list.length;
				// 重新计算
				this.Sum();
			},
			// 合计
			Sum(index,e){
				if(e) this.list[index].num = e;
				// 初始化总价
				this.totalPrice=0;
				let len = this.list.length;
				for(let i=0;i<len;i++){
					// 把选中的都计算一遍
					if(this.list[i].selected) {
						this.totalPrice += this.list[i].num*this.list[i].pprice;
					}
				}
				this.totalPrice = this.totalPrice.toFixed(2);
			},
			// 全选
			chooseAll(e){
				// 之前的状态
				let oldStatus = this.checkAll;
				// 拿到当前商品列表长度
				let len = this.list.length;
				let arr = [];
				for(let i=0;i<len;i++){
					// 修改每个商品的选中状态
					this.list[i].selected = !oldStatus;
					arr.push(this.list[i].id);
				}
				this.selectedList = oldStatus ? []:arr;
				this.checkAll = !oldStatus;
				this.Sum();
			},
			submit(){
				
				console.log('提交')
			}
		}
	}
</script>

<style lang='scss' scoped>
.shopcar{
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	&::-webkit-scrollbar {
	  display: none; /* Chrome Safari */
	}
	.car{
		flex: 1;
		overflow-y: scroll;
		&::-webkit-scrollbar {
		  display: none; /* Chrome Safari */
		}
	}
}
</style>
