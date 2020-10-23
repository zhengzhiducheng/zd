<template>
	<view class="crossLine" :style="{height,background:background||'#ffffff'}"></view>
</template>

<script>
	export default{
		props:['height','background']
	}
</script>

<style scoped>
	
</style>
