<template>
	<div class="pageSidebar">
		<img style="width: 100%;" :src="getImg('sidebar.png')" @click="open"/>
		<div ref="sidebar" id="sidebar">
			<div class="sidebarMiddle">
				<img class="btnClose" :src="getImg('btnClose.png')" @click="close" />
				<div style="margin-bottom: calc(136/750*100vw);width: 100%;"></div>
				<div class="treeNode" :key="item1.title" v-for="(item1,index1) in list">
					<div class="title titleBox1" :class="{selected:item1.show}" v-text="item1.title" @click="show1(index1)"></div>
					<div class="treeNodeContent" v-for="(item2,index2) in item1.children" v-show="item1.show">
						<div class="title titleBox2" :class="{selected:item2.show}" v-text="item2.title" @click="show2(index1,index2)"></div>
						<transition name="fade">
							<div class="treeNodeItem" v-show="item2.show">
								<div class="title titleBox3" v-for="(item3,index3) in item2.children" v-text="item3" @click="show3(index1,index2,item3)"></div>
							</div>
						</transition>
					</div>
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
		name: 'Sidebar',
		computed: mapState(['imgBaseUrl', 'pagePath']),
		data() {
			return {
				list: [{
					title: '手机门店',
					show: false,
					children: [{
						title: '标准门店',
						show: false,
						children: ['店外', '店内', '柜台', '收银台', '合规物料', '浏览全部物料']
					}, {
						title: '高产门店',
						show: false,
						children: ['店外', '店内', '柜台', '收银台', '合规物料', '浏览全部物料']
					}]
				}, {
					title: '家电门店',
					show: false,
					children: [{
						title: '标准门店',
						show: false,
						children: ['店外', '展示区', '收银台', '合规物料', '浏览全部物料']
					}, {
						title: '高产门店',
						show: false,
						children: ['店外', '展示区', '收银台', '合规物料', '浏览全部物料']
					}]
				}, {
					title: '二轮车门店',
					show: false,
					children: [{
						title: '标准门店',
						show: false,
						children: ['店外', '展示区', '收银台', '合规物料', '浏览全部物料']
					}, {
						title: '高产门店',
						show: false,
						children: ['店外', '展示区', '收银台', '合规物料', '浏览全部物料']
					}]
				}]
			}
		},
		methods: {
			getImg(img) {
				if (this.imgBaseUrl) {
					return this.imgBaseUrl + 'sidebar/' + img;
				} else {
					return require('../assets/' + 'sidebar/' + img);
				}
			},
			open() {
				this.$refs.sidebar.style.left = '0%';
			},
			close() {
				this.$refs.sidebar.style.left = '-100%';
			},
			show1(index) {
				this.list[index].show = !this.list[index].show;
			},
			show2(index1, index2) {
				this.list[index1].children[index2].show = !this.list[index1].children[index2].show;
			},
			show3(index1, index2, title) {
				this.close()
				console.log(this.pagePath[index1][index2][title])
				this.$router.replace(this.pagePath[index1][index2][title])
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.pageSidebar{
		position: relative;
		width: calc(49/750*100vw);
		height: calc(41/750*100vw);
	}
	#sidebar {
		position: fixed;
		top: 0;
		left: -100%;
		width: calc(593/750*100vw);
		height: 100%;
		background-image: linear-gradient(rgba(48, 53, 56, 0.9), rgba(22, 20, 17, 0.9));
		border-top-right-radius: calc(88/750*100vw);
		border-bottom-right-radius: calc(88/750*100vw);
		transition: left .5s;

		.sidebarMiddle {
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			width: 100%;
			height: calc(1206/750*100vw);

			.btnClose {
				position: absolute;
				top: 0;
				left: calc(48/750*100vw);
				width: calc(42/750*100vw);
			}

			.treeNode {
				position: relative;
				width: 100%;

				.title {
					position: relative;
					height: calc(94/750*100vw);
					line-height: calc(94/750*100vw);
					color: #aeaeae;
					border-bottom: 1px solid #43423f;
					text-align: left;
					background: url('../assets/sidebar/arrowTop.png');
					background-size: calc(22/750*100vw) calc(12/750*100vw);
					background-repeat: no-repeat;
					background-position: calc(100% - 121/750*100vw) center;
				}

				.title.selected {
					color: #ffffff;
					background: url('../assets/sidebar/arrowBottom.png');
					background-size: calc(22/750*100vw) calc(12/750*100vw);
					background-repeat: no-repeat;
					background-position: calc(100% - 121/750*100vw) center;
				}

				.titleBox1 {
					padding-left: calc(58/750*100vw);
					font-size: calc(40/750*100vw);
				}

				.titleBox2 {
					padding-left: calc(99/750*100vw);
					font-size: calc(32/750*100vw);
				}

				.treeNodeItem {
					background-color: rgba(0, 0, 0, 0.5);
					overflow: hidden;

					.titleBox3 {
						padding-left: calc(128/750*100vw);
						font-size: calc(28/750*100vw);
						background: transparent;
					}
				}
			}
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .8s;
	}

	.fade-enter,
	.fade-leave-to

	/* .fade-leave-active below version 2.1.8 */
		{
		opacity: 0;
	}
</style>
