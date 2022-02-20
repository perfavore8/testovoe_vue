<template>
	<div id="main" class="main">
		<h1 id="header">Поиск видео</h1>
		<div class="inp-but">
			<input
				placeholder="Что хотите посмотреть?"
				class="search"
				type="search"
				id="search"
				name="search"
				v-model="search"
			/>
			<button type="button" class="modalBtn" v-if="showResult" @click="showModal"></button>
			<button class="searchBtn" @click="onSearch">Найти</button>
		</div>
		<div v-if="showResult" class="filter">Видео по запросу «{{ this.search }}»</div>
	</div>
	<test v-if="showResult" :search="search" />
</template>

<script>
import test from '../components/Video.vue';

export default {
	data() {
		return {
			search: null,
			isModalVisible: false,
			showResult: false,
		};
	},

	name: 'app',
	components: {
		test,
	},

	mounted() {
		const { token } = this.$store.state;
		if (!localStorage[token]) {
			this.$router.push('/about');
		}
	},

	methods: {
		onSearch() {
			if (this.search) {
				this.showResult = true;
				this.$store.commit('setSearch', this.search);
			}
		},

		showModal() {
			this.isModalVisible = true;
			this.$store.commit('showModal', this.isModalVisible);
			this.$router.push('/addfavourite');
		},
	},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.main {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.filter {
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;

	display: flex;
	align-items: flex-start;
	width: 700px;
	margin-top: 40px;

	color: #272727;
}

#header {
	width: 217px;
	height: 52px;
	margin-top: 19%;

	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 52px;

	display: flex;
	align-items: center;
	text-align: center;

	color: #000000;
}

.inp-but {
	display: flex;

	& > input {
		width: 686px;
		height: 52px;

		background: #ffffff;
		border-radius: 10px;
		border: 1px solid rgba(39, 39, 39, 0.3);

		padding-left: 15px;
		padding-right: 204px;

		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 24px;

		color: #272727;
	}

	input::placeholder {
		opacity: 0.3;
	}

	input[type='text']::-ms-clear {
		display: none;
		width: 0;
		height: 0;
	}
	input[type='text']::-ms-reveal {
		display: none;
		width: 0;
		height: 0;
	}
	input[type='search']::-webkit-search-decoration,
	input[type='search']::-webkit-search-cancel-button,
	input[type='search']::-webkit-search-results-button,
	input[type='search']::-webkit-search-results-decoration {
		display: none;
	}

	& > input:focus {
		outline: none !important;
		background: rgba(197, 228, 249, 0.3);
		border: 1px solid #1390e5;
		border-radius: 10px;
		opacity: 1;
	}

	.searchBtn {
		position: absolute;
		margin-left: 686px - 150px;

		width: 150px;
		height: 52px;

		background: #1390e5;
		border-radius: 0px 10px 10px 0px;
		border: none;

		padding: 14px 20px;

		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 24px;

		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;

		color: #ffffff;
	}

	.modalBtn {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		right: 190px;
		top: 16px;

		width: 21px;
		height: 18px;

		border: none;

		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center center;
		background-color: white;
		background-image: url('../assets/Vector.svg');
	}
}
</style>
