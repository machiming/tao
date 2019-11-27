<template>
	<div class="home">
		<mt-swipe :auto="4000" class="swiper" @change="handleChange">
			<mt-swipe-item v-for="item in swipeList" :key="item.id">
				<img style="width: 100%" :src="item.src">
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
    export default ({
        data() {
            return {
                swipeList:[
	                {id:"1",link:"",src:"https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg"},
	                {id:"2",link:"",src:"https://img.alicdn.com/imgextra/i4/107/O1CN01aqqlkd1Cf2x4Ejo3q_!!107-0-luban.jpg"},
	                {id:"3",link:"",src:"https://gw.alicdn.com/imgextra/i3/163/O1CN01JJA3Pc1D4h8CyRSId_!!163-0-lubanu.jpg"}
                ],
                value:"立即搜索"
            }
        },
        methods: {
            handleChange(index) {
            }
        }
    })
</script>
<style lang="scss" scoped>
	.swiper {
		height: 32vw
	}
</style>
