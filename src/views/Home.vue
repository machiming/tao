<template>
	<div class="home">
		<mt-swipe :auto="4000" class="swiper" @change="handleChange">
			<mt-swipe-item v-for="item in swipeList" :key="item.id">
				<img style="width: 100%" :src="item.src">
			</mt-swipe-item>
		</mt-swipe>
		<cate-nav></cate-nav>
	</div>
</template>
<script>
	import cateNav from "@/components/index/cateNav";

    export default ({
        data() {
            return {
                swipeList: ''
            }
        },
	    components:{
            cateNav
        },
        methods: {
            handleChange(index) {
            
            }
        },
        mounted() {
            var reg = /^(?:\/(?=$))?$/i;
            console.log(reg.exec("1:2:3:4=5&1"));
            this.json('swipeList').then(v => {
                this.swipeList = v.data
            });
        }
    })
</script>
<style lang="scss" scoped>
	.home{
		background: #f5f5f5;
	}
	.swiper {
		height: 32vw
	}
</style>
