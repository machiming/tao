<template>
	<mt-header fixed title="固定在顶部"></mt-header>
</template>

<script>
    export default {
        name: "tabBar",
        data() {
            return {
                selected: "订单"
            }
        }
    }
</script>

<style scoped>
	mt-header{
		font-size: 1rem;
	}
</style>