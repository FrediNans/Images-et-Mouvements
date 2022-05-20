<template>
	<div>
		<transition>
			<div v-if="isActusOpen">
				<h2 class="h4 p-3">Actualités publiées</h2>
				<div class="d-flex justify-content-center flex-wrap">
					<div
						v-for="actu in actus"
						:key="actu.id"
						class="cards col-4 m-3 d-flex flex-column justify-content-between"
					>
						<div class="h5 text-center py-2">{{ actu.title }}</div>
						<div class="">
							<img :src="actu.imgUrl" class="cardsImg float-left mr-3" />
							<p class="text-justify">{{ actu.text }}</p>
						</div>

						<div class="d-flex justify-content-between py-3">
							<button
								class="btn btn-warning"
								@click="
									(isModalOpen = true) & (isModifyActuModalOpen = true),
										getCurrentActu(actu.id)
								"
							>
								Modifier
							</button>
							<button class="btn btn-danger" @click="deleteActu(actu.id)">
								Supprimer
							</button>
						</div>
					</div>
				</div>
				<div class="d-flex justify-content-center py-4">
					<button
						@click="(isCreateActuModalOpen = true) & (isModalOpen = true)"
						class="btn btn-success"
					>
						+ Ajouter une actualité
					</button>
				</div>
			</div>
		</transition>
		<!-- STAGE -->

		<div v-if="isStagesOpen">
			<h2>Gérer les stages</h2>
		</div>

		<!-- ANIMATION -->

		<div v-if="isAnimsOpen">
			<h2>Gérer les animations</h2>
		</div>

		<!-- MODAL -->

		<transition>
			<div id="bgModal" v-if="isModalOpen">
				<!-- MODIFY ACTU MODAL -->
				<div
					id="actuModal"
					class="col-6 d-flex flex-column align-items-center"
					v-if="isModifyActuModalOpen"
				>
					<h1 class="h5 text-center py-3">Modifier cette actualité</h1>
					<div class="form-group col-10">
						<label for="actuTitre">Titre</label>
						<input
							type="text"
							class="form-control"
							id="actuTitre"
							v-model="currentTitle"
						/>
					</div>
					<div class="form-group col-10">
						<label for="actuText">Contenu textuel</label>
						<textarea
							class="form-control"
							id="actuText"
							rows="3"
							v-model="currentText"
						></textarea>
					</div>
					<div class="col-6 d-flex justify-content-between py-3">
						<button
							class="btn btn-danger"
							@click="
								(isModalOpen = false) & (isModifyActuModalOpen = false),
									resetCurrentActu()
							"
						>
							Annuler
						</button>
						<button
							class="btn btn-success"
							@click="modifyActu(currentId), (isModalOpen = false), getActus()"
						>
							Valider
						</button>
					</div>
				</div>
				<!-- CREATE ACTU MODAL -->
				<div
					id="actuModal"
					class="col-6 d-flex flex-column align-items-center"
					v-if="isCreateActuModalOpen"
				>
					<h1 class="h5 text-center py-3">Ajouter une actualité</h1>
					<div class="form-group col-10">
						<label for="actuTitre">Titre</label>
						<input
							type="text"
							class="form-control"
							id="actuTitre"
							v-model="currentTitle"
						/>
					</div>
					<div class="form-group col-10">
						<label for="actuText">Contenu textuel</label>
						<textarea
							class="form-control"
							id="actuText"
							rows="3"
							v-model="currentText"
						></textarea>
					</div>
					<div class="form-group col-10 danger">
						<label for="actuImage">Ajouter une image</label>
						<input
							type="file"
							class="form-control-file"
							id="actuImage"
							@change="addImg"
						/>
					</div>
					<div id="progressBar" v-if="uploadProgress > 0">
						<div
							v-if="uploadProgress > 0"
							id="progress"
							role="progressbar"
							aria-valuenow="75"
							aria-valuemin="0"
							aria-valuemax="100"
							:style="{ width: uploadProgress + '%' }"
						></div>
					</div>
					<div class="col-4">
						<img :src="currentImgUrl" class="img-fluid" />
					</div>
					<div class="col-12 d-flex justify-content-around py-3">
						<button
							class="btn btn-danger"
							@click="(isModalOpen = false) & (isCreateActuModalOpen = false)"
						>
							Annuler
						</button>
						<button
							class="btn btn-success"
							@click="
								addActu(),
									(isModalOpen = false) & (isCreateActuModalOpen = false),
									getActus()
							"
						>
							Valider
						</button>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import {
	collection,
	getDocs,
	addDoc,
	doc,
	deleteDoc,
	setDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default {
	data() {
		return {
			actus: [],
			currentId: "",
			currentText: "",
			currentTitle: "",
			currentImgUrl: "",
			currentImgName: "",
			uploadProgress: 0,
			isModalOpen: false,
			isModifyActuModalOpen: false,
			isCreateActuModalOpen: false,
			isStagesOpen: false,
			isAnimsOpen: false,
			actuImage: "",
		};
	},
	props: ["isActusOpen"],
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
		},
		getCurrentActu(id) {
			const index = this.actus.findIndex((p) => p.id === id);
			this.currentId = id;
			this.currentTitle = this.actus[index].title;
			this.currentText = this.actus[index].text;
			this.currentImgUrl = this.actus[index].imgUrl;
			this.currentImgName = this.actus[index].imgName;
		},
		resetCurrentActu() {
			this.currentId = "";
			this.currentTitle = "";
			this.currentText = "";
			this.currentImgUrl = "";
			this.currentImgName = "";
		},
		async addActu() {
			await addDoc(collection(db, "actus"), {
				title: this.currentTitle,
				text: this.currentText,
				imgUrl: this.currentImgUrl,
				imgName: this.currentImgName,
			});
			this.resetCurrentActu();
		},
		async deleteActu(id) {
			const index = this.actus.findIndex((p) => p.id === id);
			await deleteDoc(doc(db, "actus", id));
			this.actus.splice(index, 1);
		},
		async modifyActu(id) {
			await setDoc(doc(db, "actus", id), {
				title: this.currentTitle,
				text: this.currentText,
				imgUrl: this.currentImgUrl,
				imgName: this.currentImgName,
			});
			this.resetCurrentActu();
		},
		addImg(event) {
			const storageRef = ref(storage, "actus/" + event.target.files[0].name);
			const file = event.target.files[0];
			const uploadTask = uploadBytesResumable(storageRef, file);
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					this.uploadProgress = progress;

					switch (snapshot.state) {
						case "paused":
							console.log("Upload is paused");
							break;
						case "running":
							console.log("Upload is running");
							break;
					}
				},
				(error) => {
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						this.currentImgName = event.target.files[0].name;
						this.currentImgUrl = downloadURL;
						this.uploadProgress = 0;
					});
				}
			);
		},
	},
};
</script>

<style lang="scss" scoped>
.cards {
	border: 1px solid $secondary;
	border-radius: 5px;
	box-shadow: 3px 3px 8px -1px #000000;
}

.cardsImg {
	object-fit: cover;
	max-height: 150px;
	max-width: 50%;
}
#bgModal {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba($color: #000000, $alpha: 0.8);
}
#actuModal {
	overflow-y: scroll;
	position: absolute;
	background-color: white;
	border-radius: 10px;
	max-height: 75vh;
	top: 20%;
	left: 50%;
	transform: translatex(-50%);
}
#progressBar {
	position: relative;
	width: 50%;
	border: 1px solid black;
	height: 20px;
	border-radius: 5px;
	overflow: hidden;
}
#progress {
	position: absolute;
	left: 0;
	height: 100%;
	background-color: aqua;
}
.v-enter-active,
.v-leave-active {
	transition: all 0.3s;
}

.v-enter-from,
.v-leave-to {
	transform: translateX(-1500px);
}
</style>
