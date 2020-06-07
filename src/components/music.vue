<template>
	<img class="btnMusic" :class="{rotate:bgLoop}" src="../assets/music.png" @click="touchMusic"/>
</template>

<script>
	export default{
		props:['bgLoop'],
		methods:{
			touchMusic(){
				this.$parent.playMusic();
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import url("../style/animation.css");
	.btnMusic{
		position: fixed;
		width: calc(56/750*100vw);
		right: calc(32/750*100vw);
		top: calc(30/750*100vw);
		z-index: 9;
	}
	.rotate{
		animation: rotate 8s linear infinite both;
		-webkit-animation: rotate 8s linear infinite both;
	}
</style>
