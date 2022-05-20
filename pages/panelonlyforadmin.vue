<template>
	<div class="mainContainer">
		<!-- HEADER -->

		<div class="d-flex pt-3">
			<h1 class="h3 mx-3">Panel administrateur</h1>
			<div>
				<button
					@click="
						(isActusOpen = true) &
							(isStagesOpen = false) &
							(isAnimsOpen = false),
							getActus()
					"
					class="btn btn-info mr-3"
				>
					Actualités
				</button>
				<button
					@click="
						(isActusOpen = false) &
							(isStagesOpen = true) &
							(isAnimsOpen = false)
					"
					class="btn btn-info mr-3"
				>
					Stages
				</button>
				<button
					@click="
						(isActusOpen = false) &
							(isStagesOpen = false) &
							(isAnimsOpen = true)
					"
					class="btn btn-info mr-3"
				>
					Animations
				</button>
			</div>
		</div>
		<hr />
		<!-- ACTUALITE -->
		<AdminActus :isActusOpen="isActusOpen" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			isActusOpen: true,
		};
	},
};
</script>

<style lang="scss" scoped></style>
