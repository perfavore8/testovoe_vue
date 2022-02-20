<template>
	<div class="header">
		<div class="logo"></div>
		<div class="links">
			<router-link to="/" class="link">Поиск</router-link>
			<router-link to="/favourites" class="link">Избранное</router-link>
		</div>
		<div class="log-out" @click="logOut()">Выйти</div>
	</div>
	<router-view />
</template>

<script>
export default {
	methods: {
		logOut() {
			this.$store.commit('comeOut');
			window.location.reload();
		},
	},
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	flex-direction: row;
	align-content: center;
	border-bottom: 1px solid #e5e5e5;

	height: 80 px;

	padding-inline: 200px;

	.log-out {
		display: flex;
		flex-direction: row;
		align-content: center;
		text-align: center;
		position: absolute;
		right: 11%;
		top: 14px;

		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 28px;

		color: #1390e5;
	}

	.logo {
		width: 48px;
		height: 48px;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url('../assets/sibdev-logo.svg');
		margin-right: 5.5%;
	}

	.links {
		display: flex;
		flex-direction: row;
		align-content: center;

		gap: 27%;
	}

	.link {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 28px;

		display: flex;
		align-items: center;
		text-align: center;
		text-decoration: none;

		color: rgba(39, 39, 39, 0.3);
	}
}
</style>
