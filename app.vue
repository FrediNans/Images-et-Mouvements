<template>
	<div>
		<TheHeader />
		<div id="spacer"></div>
		<NuxtPage />
		<button
			@click="backToTop()"
			type="button"
			class="pt-2"
			id="btn-back-to-top"
		>
			<span class="material-icons"> arrow_circle_up </span>
		</button>
	</div>
</template>

<script>
export default {
	methods: {
		backToTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		},
	},
	mounted() {
		window.onscroll = function () {
			const mybutton = document.getElementById("btn-back-to-top");
			if (
				document.body.scrollTop > 20 ||
				document.documentElement.scrollTop > 20
			) {
				mybutton.style.display = "block";
			} else {
				mybutton.style.display = "none";
			}
		};
	},
};
</script>

<style lang="scss">
#btn-back-to-top {
	height: 50px;
	width: 50px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	background-color: rgba($color: #000000, $alpha: 0.4);
	border: none;
	border-radius: 5px;
	color: white;
}
#spacer {
	height: 110px;
}
</style>
