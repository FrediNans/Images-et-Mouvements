<template>
	<main>
		<!-- SECTION BANDEAU TOP -->

		<div id="img-box">
			<img id="img-top" src="/stage.jpg" />
			<div id="img-text" class="p-2 col-10">
				<h2 class="text-center text-white h5">
					Bienvenue sur le site de l’association Images et Mouvements !
				</h2>
			</div>
		</div>
		<!-- SECTION PRESENTATION -->
		<section class="presentation d-lg-flex">
			<div
				class="presentation__img d-flex justify-content-center align-items-center"
			>
				<div class="presentation__img__box">
					<img class="presentation__img__box__img" src="/stage.jpg" />
				</div>
				<div class="presentation__img__deco"></div>
			</div>
			<div
				class="presentation__text px-3 d-lg-flex flex-column justify-content-center px-lg-5"
			>
				<h1 class="h3">PRÉSENTATION</h1>
				<p class="text-justify">
					L’association à but non lucratif Images et Mouvements est une instance
					Morvandelle dont le Siège Social est situé au 21 rue des Fossés à
					Château-Chinon, déclarée à la sous-préfecture de Château -Chinon.<br />
					Depuis avril 2016, l’association a pour mission de soutenir la culture
					en milieu rural.<br />
					L’association agit dans quatre champs que sont la création, la
					diffusion, l’enseignement et l’action culturelle.
				</p>
			</div>
		</section>
		<!-- SECTION ACTU -->
		<section class="">
			<div class="p-3 actu col-12 col-lg-6">
				<h1 class="h3 text-center">ACTUALITÉ</h1>
				<div
					class="actu__navbox h5 d-flex justify-content-between align-items-center"
				>
					<button @click="getActuByIndex(actusIndex - 1)" class="actu__btn">
						<span class="material-icons"> arrow_back_ios_new </span>
					</button>
					<div>
						{{ actusIndex + 1 + "/" + actus.length }}
					</div>
					<button @click="getActuByIndex(actusIndex + 1)" class="actu__btn">
						<span class="material-icons"> arrow_forward_ios </span>
					</button>
				</div>
				<div class="">
					<div class="">
						<h2 class="h5 text-center py-2">{{ currentActu.title }}</h2>
						<div
							class="d-flex flex-column flex-md-row flex-lg-column flex-xxl-row align-items-center justify-content-md-around"
						>
							<div>
								<img :src="currentActu.imgUrl" class="actu__img" />
							</div>
							<p class="text-justify text-white mt-3 col-md-7 col-lg-12">
								{{ currentActu.text }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
export default {
	data() {
		return {
			actus: [],
			actusIndex: 0,
			currentActu: {},
		};
	},
	beforeMount() {
		this.getActus();
	},

	methods: {
		async getActus() {
			if (this.actus.length > 0) {
				this.actus = [];
			}
			const querySnapshot = await getDocs(collection(db, "actus"));
			querySnapshot.forEach((doc) => {
				this.actus.push({
					id: doc.id,
					text: doc.data().text,
					title: doc.data().title,
					imgUrl: doc.data().imgUrl,
					imgName: doc.data().imgName,
				});
			});
			this.getActuByIndex(this.actusIndex);
		},
		getActuByIndex(index) {
			if (index > this.actus.length - 1 || index < 0) {
				return;
			}
			this.actusIndex = index;
			this.currentActu = {
				title: this.actus[index].title,
				text: this.actus[index].text,
				imgUrl: this.actus[index].imgUrl,
			};
			console.log(this.currentActu);
		},
	},
};
</script>

<style lang="scss" scoped>
section {
	max-width: 1440px;
	margin: auto;
}
h1,
h2 {
	color: $primary;
}
#img-box {
	position: relative;
}
#img-top {
	height: 400px;
	width: 100%;
	object-fit: cover;
}
#img-text {
	position: absolute;
	background-color: rgba($color: #000000, $alpha: 0.6);
	top: 70%;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 10px;
}
.presentation {
	&__img {
		height: 500px;
		width: 100%;
		&__box {
			border: 5px solid white;
			width: 320px;
			height: 320px;
			border-radius: 50%;
			overflow: hidden;
			&__img {
				object-fit: cover;
				width: 320px;
				height: 320px;
			}
		}
		&__deco {
			position: absolute;
			z-index: -1;
			margin-left: 10px;
			margin-top: 20px;
			width: 320px;
			height: 320px;
			border-radius: 50%;
			background-color: $primary;
		}
	}
}
.actu {
	background-color: $secondary;
	&__navbox {
		color: $primary;
	}
	&__btn {
		display: flex;
		justify-content: center;
		align-items: center;
		color: $primary;
		background-color: $secondary;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		width: 45px;
		height: 45px;
		margin: 0;
		padding: 0;
		&:hover {
			background-color: rgb(73, 73, 73);
		}
	}
	&__imgBox {
		width: 150px;
		height: 150px;
	}
	&__img {
		height: 250px;
		width: 300px;
		object-fit: cover;
	}
}
</style>
