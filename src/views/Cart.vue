<template>
	<div class="about">
<pre>
<code class="language-html">&lt;script src="./iconfont.js"&gt;&lt;/script&gt;</code>
<code class="language-html">
&lt;style&gt;
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
&lt;/style&gt;
</code></pre>
	</div>

</template>
<script>
    export default ({
        data() {
            return {
                htmlCode: ``
            }
        },
        mounted() {
            console.log(Prism)
            Prism.highlightAll()
        }
    })
</script>

