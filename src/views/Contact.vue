<template>
	<double-product 
			:list="list" 
			colum="2">
	</double-product>
</template>
<script>
	import doubleProduct from "@/components/product/doubleProduct";
    export default ({
	    components: {
            doubleProduct
	    },
        data() {
            return {
                list: []
            }
        },
	     mounted(){
            this.json('list').then(v=>{
                this.list = v.data
            });
	    }
    })
</script>
