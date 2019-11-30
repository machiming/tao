<template>
	<div class="catenav-wrap">
		<div class="catenav-item"
		     v-for="item in navList"
		     :key="item.id"
		     @click="to(item.link)">
			<div :style="'color:rgb('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+')'"
			     :class="item.icon"
			     class="catenav-item-img iconfont">
				<img v-if="item.icon===''"
				     :src="item.src" alt="">
			</div>
			<div class="catenav-item-title">{{item.title}}</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "cateNav",
        data() {
            return {
                navList: []
            }
        },
        methods: {
            to(link) {
                console.log(this.$route)
                console.log(this)
                console.log(this.$router)
                this.$router.push({path: link})
                
            }
        },
        mounted() {
           
            this.json('navList').then(v => {
                this.navList = v.data
            });
        }
    }
</script>

<style scoped lang="scss">
	.catenav-wrap {
		background: white;
		display: flex;
		justify-content: space-between;
		flex-flow: wrap;
		width: 100%;
		box-sizing: border-box;
		
		&:after {
			content: "";
			display: block;
		}
		
		.catenav-item {
			width: 20%;
			margin: 10px 0 0;
			
			.catenav-item-img {
				font-size: 34px;
				
				img {
					width: 60%;
				}
			}
			
			.catenav-item-title {
				text-align: center;
				font-size: 12px;
			}
		}
	}
</style>