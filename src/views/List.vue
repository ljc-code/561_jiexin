<template>
	<div class="list">
		<img class="showBg" :src="getImg('bg.jpg')" />
		<img class="btnBack" :src="getImg('back.png')" @click="toBackHome" />
		<div class="middleContainer">
			<p class="title" v-text="titleList[step-1]"></p>
			<div class="btnContainer">
				<div class="BtnBox">
					<table></table>
						<template v-if="step==1">
						<div class="item item1" :class="[mcEnd?'':'enterMc'+index]" :key='item' v-for="(item,index) in list1" v-text="item" @click="select(index)" @touchstart="touchStart(index)"></div>
					</template>
					<template v-if="step==2">
						<div class="item item1" :class="[mcEnd?'':'enterMc'+index]" :key='item' v-for="(item,index) in list2" v-text="item" @click="select(index)" @touchstart="touchStart(index)"></div>
					</template>
					<template v-if="step==3">
						<div class="item item2" :class="[mcEnd?'':'enterMc'+index]" :key='item' v-for="(item,index) in list3[selectList[0]]" v-text="item" @click="select(index)" @touchstart="touchStart(index)"></div>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'List',
		computed: mapState(['pagePath']),
		data() {
			return {
				step: 1,
				selectList: [0, 0, ''],
				mcEnd:true,
				titleList: ['请选择品类', '请选择店铺类型', '请选择场景'],
				list1: ['手机门店', '家电门店', '二轮车门店'],
				list2: ['标准门店', '高产门店'],
				list3: [
					['店外', '店内', '柜台', '收银台', '合规物料', '浏览全部物料'],
					['店外', '展示区', '收银台', '合规物料', '浏览全部物料'],
					['店外', '展示区', '收银台', '合规物料', '浏览全部物料']
				]
			}
		},
		methods: {
			getImg(img) {
				if (this.imgBaseUrl) {
					return this.imgBaseUrl + 'list/' + img;
				} else {
					return require('../assets/' + 'list/' + img);
				}
			},
			toBackHome() {
				if (this.step == 1) {
					this.$router.replace('/')
				} else {
					this.step--;
				}
			},
			touchStart(){
				this.mcEnd=true;
			},
			select(index) {
				if (this.step < 3) {
					this.mcEnd=false;
					this.selectList[this.step - 1] = index;
					this.step++;
				} else {
					this.selectList[this.step - 1] = this.list3[this.selectList[0]][index]
					var path = this.pagePath[this.selectList[0]][this.selectList[1]][this.selectList[2]];
					this.$router.replace(path)
				}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import url("../style/animation.css");

	.list {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		overflow: hidden;
		.btnBack {
			position: absolute;
			width: calc(24/750*100vw);
			top: calc(30/750*100vw);
			left: calc(46/750*100vw);
		}

		.middleContainer {
			.title {
				color: #FFFFFF;
				font-size: 9.4vw;
				margin: 21.5vw auto 0 auto;
			}

			.btnContainer {
				position: relative;
				width: calc(446/750*100vw);
				margin: 15.8vw auto 0 auto;

				.BtnBox {
					position: relative;
					width: 100%;

					// overflow: hidden;
					.item {
						position: relative;
						width: 100%;
						height: calc(91/750*100vw);
						line-height: calc(87/750*100vw);
						border: calc(2/750*100vw) solid #ffffff;
						box-sizing: border-box;
						border-radius: 7vw;
						color: #ffffff;
						font-size: 5.5vw;
						transform: scale(1);
						cursor: pointer;
					}

					.item:active {
						transform:scale(0.9);
					}

					.item1 {
						margin-top: calc(93/750*100vw);
					}

					.item2 {
						margin-bottom: calc(42/750*100vw);
					}
					.enterMc0{
						animation: enterMc .5s both;
						-webkit-animation: enterMc .5s both;
					}
					.enterMc1{
						animation: enterMc .5s .3s both;
						-webkit-animation: enterMc .5s .3s both;
					}
					.enterMc2{
						animation: enterMc .5s .6s both;
						-webkit-animation: enterMc .5s .6s both;
					}
					.enterMc3{
						animation: enterMc .5s .9s both;
						-webkit-animation: enterMc .5s .9s both;
					}
					.enterMc4{
						animation: enterMc .5s 1.2s both;
						-webkit-animation: enterMc .5s 1.2s both;
					}
					.enterMc5{
						animation: enterMc .5s 1.5s both;
						-webkit-animation: enterMc .5s 1.5s both;
					}
				}
			}
		}
	}
</style>
