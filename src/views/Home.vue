<template>
	<div class="home" @touchend="toList">
		<img class="showBg" :src="getImg('bg.jpg')"/>
		<!-- <img class="showBg" :src="getImg('showBg.jpg')" /> -->
		<div class="middleContainer">
			<img class="logo" :src="getImg('logo.png')" />
			<img class="txt a-fadeinB" :src="getImg('txt.png')" />
			<img class="arrow" :src="getImg('arrow.png')"/>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'Home',
		computed: mapState(['imgBaseUrl']),
		methods: {
			getImg(img) {
				if (this.imgBaseUrl) {
					return this.imgBaseUrl+'home/' + img;
				} else {
					return require('../assets/'+'home/' + img);
				}
			},
			toList(){
				this.$router.replace('/list')
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
.home{
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: #61686d;
	overflow: hidden;
	.logo{
		width: calc(166/750*100vw);
		margin: 0 auto;
		padding-right: 1vw;
	}
	.txt{
		width: calc(413/750*100vw);
		margin: 42vw auto 0 auto;
		padding-right: 1vw;
	}
	.arrow{
		position: absolute;
		bottom: 0;
		width: calc(100/750*100vw);
		left: calc(325/750*100vw);
		animation: arrowMc .8s linear infinite alternate both;
		-webkit-animation: arrowMc .8s linear infinite alternate both;
	}
}
</style>
<style scoped="scoped">
	@import url("../style/animate.css");
	@import url("../style/animation.css");
</style>
