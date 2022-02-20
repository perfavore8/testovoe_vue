<template>
	<div class="main">
		<label>Избранное</label>
		<div
			v-for="favourite in favs"
			:key="favourite.id"
			@click="(this.EditFav = favourite), showModal()"
		>
			<label>{{ favourite.name }}</label>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			favs: [],
			EditFav: null,
		};
	},

	mounted() {
		this.favs = this.$store.state.favorites;
		console.log(this.favs);
	},

	methods: {
		showModal() {
			this.isModalVisible = true;
			this.$store.commit('setEditFav', this.EditFav);
			this.$store.commit('showModal', this.isModalVisible);
			this.$router.push('/editfavourite');
		},
	},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.main {
	margin-left: 11.5%;
	display: flex;
	flex-direction: column;
	gap: 1px;

	& > label {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 28px;
		line-height: 40px;

		display: flex;
		align-items: center;
		margin-top: 40px;
		margin-bottom: 40px;

		color: #000000;
	}
	& > div > label {
		height: 47px;
		max-width: 1040px;
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;

		border: 1px solid #cecece;
		padding-left: 20px;

		display: flex;
		align-items: center;

		color: #000000;
	}
}
</style>
