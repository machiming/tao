<template>
	<div class="list" :class="'colum-'+colum">
		<div class="list-item" v-for="item in list">
			<div class="item-img">
				<img :src="item.src">
			</div>
			<div class="item-info">
				<div class="item-title">
					<span class="item-title-p">{{item.title}}</span>
				</div>
				<div class="item-price-box">
					<span class="sign">￥</span>
					<span class="price">{{item.price}}</span>
					<span class="sale">{{item.sale}}人已购买</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "doubleProduct",
        props: {
            list: {
                default: [],
                require: true
            },
            colum: {
                default: 2,
            }
        }
    }
</script>

<style scoped lang="scss">
	.list {
		padding: 0 2vw 2vw 2vw;
		background: #f2f2f2;
		display: flex;
		justify-content: flex-start;
		flex-flow: wrap;
		
		.list-item {
			margin: 2.4vw 1.2vw 0 1.2vw;
			width: 45.6vw;
			height: 69.6vw;
			background: white;
			border-radius: 1.2vw;
			overflow: hidden;
			
			.item-img {
				width: 100%;
				height: 0;
				padding-top: 100%;
				position: relative;
				
				img {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: auto;
					overflow: hidden;
				}
			}
			
			.item-info {
				padding: 0 10px;
				
				.item-title {
					margin-top: 3vw;
					height: 10vw;
					line-height: 5vw;
					overflow: hidden;
					text-align: left;
					
					.item-title-p {
						font-size: 3vw;
						color: rgb(51, 51, 51);;
					}
				}
				
				.item-price-box {
					margin-top: 3.6vw;
					line-height: 5vw;
					height: 5vw;
					text-align: left;
					
					.sign {
						color: #ff5500;;
						font-size: 2.8vw;
					}
					
					.price {
						color: #ff5500;;
						font-size: 3.8vw;
						margin-right: 1vw;
					}
					
					.sale {
						font-size: 2.8vw;
						color: #999999;
					}
				}
			}
		}
	}
</style>