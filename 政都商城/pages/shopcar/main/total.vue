<template>
	<view class="d-flex a-stretch bg-white position-fixed left-0 right-0 border-top border-light-secondary animated fadeIn faster" 
	style="height: 100upx;z-index: 99;bottom: 120upx;">
		<view class="flex-1 d-flex a-center flex-shrink j-center" v-show="isedit">
			<cart-checkbox :checked="checkAll"
			@change="change">
			</cart-checkbox> 
			<view class="">
				{{checkAll?'全选':'全不选'}}
			</view>
		</view>
		<template v-if="!isedit">
			<!-- 合计 -->
			<view class="d-flex a-center j-center" style="flex: 2;font-size: 32upx;">
			合计：<view>{{totalPrice}}</view>
			</view>
			<!-- 结算 -->
			<view class="main-bg-color text-white d-flex a-center j-center flex-shrink" hover-class="main-bg-hover-color"
			style="flex: 2;font-size: 32upx;margin-top: -1upx;" @tap="submit">
				结算 {{getTotalNum}}
			</view>
		</template>
		<template v-else>
			<!-- 删除 -->
			<view class="bg-danger text-white d-flex a-center j-center flex-shrink" hover-class="main-bg-hover-color"
			style="flex: 2;font-size: 32upx;margin-top: -1upx;" @tap="delect">
				删除
			</view>
		</template>
	</view>
</template>

<script>
	import cartCheckbox from "./checkbox.vue";
	export default {
		components: {
			cartCheckbox
		},
		props:{
			isedit:{
				type:Boolean,
				default:false
			},
			totalPrice:{
				type:[Number,String],
				default:0
			},
			totalNum:{
				type:[Number,String],
				default:0
			},
			checkAll:{
				type:Boolean,
				default:false
			},
			totalPrice:{
				type:[Number,String],
				default:0
			}
		},
		computed:{
			getTotalNum(){
				return this.totalNum > 0 ? "("+this.totalNum+")" : '';
			}
		},
		methods: {
			change(e) {
				this.$emit('change',e)
			},
			submit(){
				this.$emit('submit')
			},
			removeFava(){
				this.$emit('fava')
			},
			delect(){
				this.$emit('delect')
			}
		},
	}
</script>

<style>
</style>
