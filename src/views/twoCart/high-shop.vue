<template>
	<div class="all">
		<!-- <img class="showBg" src="../../assets/vehicle/showBg.jpg" alt=""> -->
		<img class="imgBg" src="../../assets/vehicle/imgBg.jpg" alt="">
		<div class="content">
			<img class="imgWord1" src="../../assets/vehicle/imgWord1_3_1.png" alt="">
			<img class="imgWord2" src="../../assets/vehicle/imgWord2_2_1.png" alt="">
			<img class="imgWord3" src="../../assets/vehicle/imgWord2_3_1.png" alt="">
			<div class="contPic">
				<img class="bigImg" src="../../assets/vehicle/contImg2_3.png" alt="">
				<img @click="showMaskfn(3)" class="line" src="../../assets/vehicle/line.png" alt="">
				<img @click="showMaskfn(1)" class="imgLeft" src="../../assets/vehicle/click2_3_1.png" alt="">
				<img @click="showMaskfn(2)" class="imgRight" src="../../assets/vehicle/click2_3_2.png" alt="">
				<img @click="showMaskfn(3)" class="imgRight2" src="../../assets/vehicle/click2_3_3.png" alt="">
				<img class="click1" src="../../assets/pageRedDot.png" alt="">
				<img class="click2" src="../../assets/pageRedDot.png" alt="">
				<img class="click3" src="../../assets/pageRedDot.png" alt="">
			</div>
			<img class="imgWord4" src="../../assets/vehicle/imgWord2_3_2.png" alt="">
		</div>
		<!-- 弹框 -->
		<div class="maskAll" v-if="showMask">
			<img v-if="showMaskNum==1" class="mask1_1" src="../../assets/vehicle/mask2_5.jpg" alt="">
			<img v-if="showMaskNum==2" class="mask1_1" src="../../assets/vehicle/mask2_6.jpg" alt="">
			<img v-if="showMaskNum==3" class="mask1_1" src="../../assets/vehicle/mask2_7.jpg" alt="">
			<img @click="showMask=false" class="dele" src="../../assets/vehicle/dele.png" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		name:"highshop",
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
				}else if(e==2){
					this.showMaskNum = 2;
				}else{
					this.showMaskNum = 3;
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
		width: 0.97rem;
		height: 0.48rem;
		margin-left: 3.05rem;
		margin-top: 0.05rem;
	}
	.imgWord2{
		width: 4.46rem;
		height: 0.51rem;
		margin-left: 0.6rem;
		margin-top: 0.7rem;
	}
	
	.imgWord3{
		width: 6.07rem;
		height: 0.73rem;
		margin-left: 0.6rem;
		margin-top: 0.3rem;
	}
	.imgWord4{
		width: 6.02rem;
		height: 1.33rem;
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
		width: 6.34rem;
		height: 0.78rem;
		position: absolute;
		top: 1.3rem;
		left: 0.8rem;
	}
	.imgRight{
		width: 1.23rem;
		height: 2.37rem;
		position: absolute;
		top: 2.5rem;
		left: 0.4rem;
	}
	.imgRight2{
		width: 1.39rem;
		height: 3.71rem;
		position: absolute;
		top: 2.5rem;
		right: 0.4rem;
	}
	.click1{
		width: 0.29rem;
		height: 0.29rem;
		position: absolute;
		top: 1.2rem;
		left: 6.3rem;
	}
	.click2{
		width: 0.29rem;
		height: 0.29rem;
		position: absolute;
		top: 4.7rem;
		left: 1rem;
	}
	.click3{
		width: 0.29rem;
		height: 0.29rem;
		position: absolute;
		top: 4.7rem;
		right: 0.4rem;
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
	.line{
		width: 1.43rem;
		height: 1.49rem;
		position: absolute;
		top: 5.2rem;
		right: 0.7rem;
		z-index: 9;
	}
</style>
