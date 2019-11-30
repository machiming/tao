<template>
	<mt-tabbar v-model="selected">
		<mt-tab-item v-for="item in path" :id="item.pagePath" @click.native="jump(item.pagePath,item.id)">
			<div slot="icon" class="iconfont"
			     :class="selected==item.pagePath?item.selectedIconPath:item.iconPath"></div>
			<span>{{item.text}}</span>
		</mt-tab-item>
	</mt-tabbar>
</template>
<script>
    import router from "@/router";

    export default {
        name: "tabBar",
        data() {
            return {
                selected: this.$route.path,
                path:/*[]*/ [
                    {
                        "text": "首页",
                        "pagePath": "/",
                        "iconPath": "icon-home_light",
                        "selectedIconPath": "icon-home_fill_light",
                    },
                    {
                        "text": "微淘",
                        "pagePath": "/contact",
                        "iconPath": "icon-we",
                        "selectedIconPath": "icon-wefill",
                    },
                    {
                        "text": "消息",
                        "pagePath": "/find",
                        "iconPath": "icon-message",
                        "selectedIconPath": "icon-messagefill",
                    }, {
                        "text": "购物车",
                        "pagePath": "/cart",
                        "iconPath": "icon-cart_light",
                        "selectedIconPath": "icon-cart_fill_light",
                    }, {
                        "text": "我的淘宝",
                        "pagePath": "/user",
                        "iconPath": "icon-my_light",
                        "selectedIconPath": "icon-my_fill_light",
                    }
                ]/**/
            }
        },
        methods: {
            jump(page) {
                this.$router.push({path: page});
            }
        },
        mounted() {
			
        },
        watch: {
            '$route'(to, from) {
                this.selected = to.path;
            }
        }
    }
</script>

<style scoped lang="scss">
	@keyframes shandong {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.7);
		}
		100% {
			transform: scale(1.1);
		}
	}
	
	.is-selected {
		background-color:transparent !important;
		color: rgb(255, 80, 0) !important;
	}
	
	.is-selected .iconfont {
		color: rgb(255, 80, 0) !important;
		animation: shandong 0.3s ease-in-out forwards;
	}
	
	.iconfont {
		font-size: 20px;
	}
</style>