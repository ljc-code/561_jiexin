<template>
	<div class="all">
		<!-- <img class="showBg" src="../../assets/vehicle/showBg.jpg" alt=""> -->
		<img class="imgBg" src="../../assets/vehicle/imgBg.jpg" alt="">
		<div class="content">
			<img class="imgWord1" src="../../assets/vehicle/imgWord1.png" alt="">
			<img class="imgWord2" src="../../assets/vehicle/imgWord2.png" alt="">
			<img class="imgWord3" src="../../assets/vehicle/imgWord3.png" alt="">
			<div class="contPic">
				<img class="bigImg" src="../../assets/vehicle/contImg1_1.png" alt="">
				<img @click="showMaskfn(1)" class="imgLeft" src="../../assets/vehicle/click1.png" alt="">
				<img @click="showMaskfn(2)" class="imgRight" src="../../assets/vehicle/click2.png" alt="">
				<img class="click1" src="../../assets/pageRedDot.png" alt="">
				<img class="click2" src="../../assets/pageRedDot.png" alt="">
			</div>
			<img class="imgWord4" src="../../assets/vehicle/imgWord4.png" alt="">
		</div>
		<!-- 弹框 -->
		<div class="maskAll" v-if="showMask">
			<img v-if="showMaskNum==1" class="mask1_1" src="../../assets/vehicle/mask1_1.jpg" alt="">
			<img v-if="showMaskNum==2" class="mask1_1" src="../../assets/vehicle/mask1_2.jpg" alt="">
			<img @click="showMask=false" class="dele" src="../../assets/vehicle/dele.png" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		name:"criterionMoney",
		data(){
			return{
				showMask:false,//弹框显示
				showMaskNum:null,
			}
		},
		methods:{
			showMaskfn(e){
				this.showMask = true;
				if(e==1){
					this.showMaskNum = 1;
				}else{
					this.showMaskNum = 2;
				}
			}
		}
	}
</script>

<style scoped="scoped">
	*{
		padding: 0;
		margin: 0;
	}
	.all{
		width: 100%;
		height: 100%;
	}
	.showBg,.imgBg,.maskAll{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		
	}
	.content{
		width: 100%;
		height: 12.06rem;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		color: #c4c4c3;
		text-align: left;
	}
	.imgWord1{
		width: 1.46rem;
		height: 0.48rem;
		margin-left: 3.05rem;
		margin-top: 0.05rem;
	}
	.imgWord2{
		width: 4.47rem;
		height: 0.51rem;
		margin-left: 0.6rem;
		margin-top: 0.7rem;
	}
	
	.imgWord3{
		width: 5.97rem;
		height: 0.73rem;
		margin-left: 0.6rem;
		margin-top: 0.3rem;
	}
	.imgWord4{
		width: 6.49rem;
		height: 0.85rem;
		margin-left: 0.6rem;
		margin-top: 7.6rem;
	}
	.contPic{
		position: relative;
	}
	.bigImg{
		width: 6.93rem;
		height: 6.3rem;
		position: absolute;
		top: 0.48rem;
		left: 0.3rem;
	}
	.imgLeft{
		width: 1.5rem;
		height: 0.92rem;
		position: absolute;
		top: 3.38rem;
		left: 1rem;
	}
	.imgRight{
		width: 1.59rem;
		height: 2.44rem;
		position: absolute;
		top: 2.5rem;
		right: 0.6rem;
	}
	.click1{
		width: 0.29rem;
		height: 0.29rem;
		position: absolute;
		top: 3.2rem;
		left: 2rem;
	}
	.click2{
		width: 0.29rem;
		height: 0.29rem;
		position: absolute;
		top: 2.3rem;
		right: 1.3rem;
	}
	.mask1_1{
		width: 100%;
		height: 15.06rem;
		position: absolute;
		top: 50%;
		left:0rem;
		transform: translateY(-50%);
	}
	.dele{
		width: 0.8rem;
		height: 0.8rem;
		position: absolute;
		bottom: 1.5rem;
		left:50%;
		transform: translateX(-50%);
	}
</style>
