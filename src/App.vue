<template>
	<div id="app">
		<router-view />
		<btn-music :bgLoop="bgLoop"></btn-music>
		<!-- <sidebar style="position: absolute;top: 20vw;left: 10vw;"></sidebar> -->
	</div>
</template>
<script>
	import BtnMusic from './components/music.vue'
	// import Sidebar from './components/sidebar.vue'
	export default {
		name: 'APP',
		data() {
			return {
				btnAudio: null,
				bgLoop: false,
			}
		},
		components: {
			BtnMusic
		},
		mounted() {
			var that = this;
			this.bgAudio=window['bgAudio'];
			this.bgLoop=window['bgLoop']
			if(!this.bgLoop){
				this.bgAudio.removeEventListener('play',window['openLoop']);
			}
			this.bgAudio.addEventListener('play', function() {
				that.bgLoop = true;
			})
			this.bgAudio.addEventListener('pause', function() {
				that.bgLoop = false;
			})
		},
		methods: {
			playMusic() {
				if (this.bgLoop) { //暂停
					this.bgAudio.pause();
				} else { //播放
					this.bgAudio.play();
				}
			}
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	html,
	body {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	body {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	img {
		display: block;
	}

	#app {
		position: relative;
		height: 100%;
		text-align: center;
	}

	.middleContainer {
		position: absolute;
		width: 100%;
		height: calc(1206/750*100vw);
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.showBg {
		position: absolute;
		width: 100%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
