<template>
	<view class="px-2 border d-inline-block m-1" :style="getStyle">
		{{name}}
	</view>
</template>

<script>
	export default {
		props:{
			name:String,
			color:{
				type:Boolean,
				default:true
			}
		},
		computed:{
			getStyle(){
				if (!this.color) return 'border:0;background:#F5F5F5;color:#717171;';
				let color = {
					borderColor:[ '#EEA6AA','#DD6A4B','#98D5D8','#9DBE93','#BCCD99' ],
					background:[ '#F8EAE9','#FFBEC6','#E8F6F6','#E4F5E2','#F2F6E8' ]
				};
				let index = Math.floor(Math.random()*color.borderColor.length);
				let borderColor = color.borderColor[index];
				let background = color.background[index];
				return `border-color:${borderColor};background:${background};`;
			}
		}
	}
</script>

<style>
</style>
