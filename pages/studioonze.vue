<template>
	<main class="p-3">
		<h1 class="h2 text-center">Studio Onze</h1>
		<div
			id="carouselExampleIndicators"
			class="carousel slide"
			data-ride="carousel"
		>
			<ol class="carousel-indicators">
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to="0"
					class="active"
				></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="/stage.jpg" class="d-block w-100" alt="..." />
				</div>
				<div class="carousel-item">
					<img src="/stage.jpg" class="d-block w-100" alt="..." />
				</div>
				<div class="carousel-item">
					<img src="/stage.jpg" class="d-block w-100" alt="..." />
				</div>
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-target="#carouselExampleIndicators"
				data-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-target="#carouselExampleIndicators"
				data-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</button>
		</div>
		<p>
			Situé au 11 rue du Château, à Frétoy dans la Nièvre, à neuf kilomètres de
			Château Chinon, le Studio Onze est un espace culturel privé, créé en 2022,
			et jouxte une maison de maître pouvant loger jusqu’à dix personnes.
		</p>
		<p>
			Ce lieu peut être loué pour une réunion de travail, une conférence, un
			séminaire, une retraite de méditation, un stage de Yoga…
		</p>
		<p>
			Il s’ouvre sur un jardin arboré par deux grandes portes fenêtres, possède
			une hauteur sous-plafond de quatre mètres. Sa surface de soixante-deux
			mètres carrés est recouverte d’un plancher sur double lambourdes et peut
			être recouvert d’un lino Harlequin.
		</p>
		<p>
			Doté d’une pompe à chaleur réversible, ce lieu offre une douce chaleur en
			hiver et une agréable fraîcheur en été.
		</p>
		<p>
			Il est équipé d’une chaîne Hifi professionnelle avec bluetooth et de
			micros (cravatte et main), d’un rétroprojecteur et d’éclairages de scène.
		</p>
		<div>
			<span>Il peut être loué pour :</span>
			<ul>
				<li>100 € la demie-journée</li>
				<li>150 € la journée</li>
				<li>500 € la semaine.</li>
			</ul>
		</div>
		<p>
			Cet espace peut être loué avec le «
			<a
				href="https://www.airbnb.fr/rooms/43233938?source_impression_id=p3_1652950064_8iAwHJR2RK9KEZ6n"
				target="_blank"
				>Petit Manoir de Fretoy</a
			>
			» situé à quelques mètres et qui peut héberger jusqu’à 10 personnes.
		</p>
		<p>
			Ces deux bâtiments sont gérés par «
			<a
				href="https://conciergeriedumorvan.com/le-petit-manoir-de-fretoy/"
				target="_blank"
			>
				Concergerie du Morvan
			</a>
			» élue super hôte par Rbnb.
		</p>
		<div>
			<span>Infos et réservations :</span>
			<ul>
				<li>
					<a
						href="https://www.airbnb.fr/rooms/43233938?source_impression_id=p3_1652950064_8iAwHJR2RK9KEZ6n"
						target="_blank"
						>Rbnb - Petit Manoir de Fretoy</a
					>
				</li>
				<li>
					<a
						href="https://conciergeriedumorvan.com/le-petit-manoir-de-fretoy/"
						target="_blank"
					>
						Concergerie du Morvan
					</a>
				</li>
			</ul>
		</div>
	</main>
</template>

<style lang="scss" scoped>
p {
	text-align: justify;
}
main {
	max-width: 1000px;
	margin: auto;
}
</style>
