<template>
	<mt-tabbar v-model="selected">
		<mt-tab-item id="/" @click.native="jump('/')">
			<div slot="icon" class="iconfont icon-shouye"></div>
			<span>微信</span>
		</mt-tab-item>
		<mt-tab-item id="/contact" @click.native="jump('/contact')">
			<div slot="icon" class="iconfont icon-wodedingdan"></div>
			<span>通讯录</span>
		</mt-tab-item>
		<mt-tab-item id="/find" @click.native="jump('/find')">
			<div slot="icon" class="iconfont icon-shouhuodizhi"></div>
			<span>发现</span>
		</mt-tab-item>
		<mt-tab-item id="/user" @click.native="jump('/user')">
			<div slot="icon" class="iconfont icon-shouhuodizhi"></div>
			我
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
    import router from "@/router";

    export default {
        name: "tabBar",
        data() {
            return {
                selected: this.$route.path
            }
        },
        methods: {
            jump(page) {
                router.push({path: page});
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
	.iconfont {
		font-size: 20px;
	}
</style>