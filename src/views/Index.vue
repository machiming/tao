<template>
	<div class="home">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<div style="height: 55px"></div>
		<tab-bar class="footerBar"></tab-bar>
	</div>
</template>
<script>
    import TabBar from "@/components/TabBar";
    import HeadBar from "@/components/HeadBar";

    export default {
        name: 'home',
        components: {
            TabBar,
            HeadBar,
        }
    }
</script>
<style>
	.footerBar {
		position: fixed !important;
		bottom: 0 !important;
	}
</style>
