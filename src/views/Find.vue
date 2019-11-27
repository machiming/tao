<template>
	<div class="about">
		<mt-button type="primary" @click.native="handleClick">primary</mt-button>
		<div class="coupon" :class="{show:show}">
			<div class="modal-bg" @click="show=false"></div>
			<div class="couponCard"></div>
		</div>
	</div>
</template>
<script>
    export default ({
        data() {
            return {
                show: false
            }
        },
        methods: {
            handleClick(event) {
                this.show = true
            }
        },
        mounted() {

        }
    })
</script>
<style lang="scss">
	@keyframes showbigger {
		0% {
			transform: scale(0.2);
		}
		100% {
			transform: scale(1);
		}
	}
	
	.coupon {
		display: none;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		
		&.show {
			display: flex;
			justify-content: center;
			
			.couponCard {
				animation: showbigger 0.2s ease-in forwards;
			}
		}
		
		.couponCard {
			position: relative;
			width: 60vw;
			height: 80vw;
			border-radius: 5vw;
			background: white;
			transform-origin: center;
			align-self: center;
			
			&:before {
				content: "";
				position: absolute;
				left: 50%;
				height: 12vw;
				width: 1px;
				background: rgba(255, 255, 255, 0.41);
				bottom: -12vw;
              transform: translateX(-50%);
			}
			
			&:after {
				content: "";
				position: absolute;
				left: 50%;
				height: 7vw;
				width: 7vw;
				background: url("../assets/images/close.png") no-repeat center top;
				background-size: 100%;
				bottom: -18.8vw;
				transform: translate(-50%, 0);
			}
		}
		
		.modal-bg {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background: rgba(0, 0, 0, 0.4);
		}
		
	}
</style>
