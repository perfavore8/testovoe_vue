<template>
	<div class="main" v-if="this.$store.state.isModalVisible">
		<div class="add">
			<label>Сохранить запрос</label>
			<div id="label-input">
				<label for="req" class="label">Запрос</label>
				<input class="input" type="text" id="req" name="req" v-model="req" />
			</div>
			<div id="label-input">
				<div>
					<span class="star">* </span>
					<label for="name" class="label">Название</label>
				</div>
				<input class="input" type="text" id="name" name="name" v-model="name" />
			</div>
			<div id="label-input">
				<label for="sortBy" class="label">Сортировать по</label>
				<label for="sortBy">
					<select class="sortBy" id="sortBy" name="sortBy" v-model="sortBy">
						<option>Дате</option>
						<option>Рейтингу</option>
						<option>Актуальности</option>
						<option>Названию</option>
						<option>Просмотрам</option>
					</select>
				</label>
			</div>
			<div id="label-input">
				<label for="maxQuontity" class="label">Максимальное количество</label>
				<div id="qntnRange">
					<input
						class="maxQuontityRange"
						type="range"
						id="maxQuontityRange"
						name="maxQuontityRange"
						v-model="maxQuontity"
						placeholder="25"
						min="0"
						max="50"
						step="1"
					/>
					<input
						class="maxQuontityNumber"
						type="number"
						id="maxQuontityNumber"
						name="maxQuontityNumber"
						v-model="maxQuontity"
						placeholder="25"
						min="0"
						max="50"
					/>
				</div>
			</div>
			<div class="btns">
				<button type="button" class="btn-no-save" @click="close" aria-label="Close modal">
					Не сохранять
				</button>
				<button type="button" class="btn-save" @click="save" aria-label="Close modal">
					Сохранить
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			req: null,
			name: null,
			sortBy: null,
			maxQuontity: null,
			isModalVisible: true,
		};
	},
	name: 'modal',
	mounted() {
		console.log('1234');
		this.req = this.$store.state.search;
	},
	methods: {
		save() {
			if (this.name && this.req) {
				const { favorites } = this.$store.state;
				this.$store.commit('setFavorites', [
					...favorites,
					{
						id: Math.random().toString(27),
						req: this.req,
						name: this.name,
						sortBy: this.sortBy,
						maxQuontity: this.maxQuontity,
					},
				]);
				this.isModalVisible = false;
				this.$store.commit('showModal', this.isModalVisible);
				this.$router.push('/');
			}
		},
		close() {
			this.isModalVisible = false;
			this.$store.commit('showModal', this.isModalVisible);
			this.$router.push('/');
		},
	},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.main {
	display: flex;
	align-items: center;
	justify-content: center;
}

.add {
	display: flex;
	flex-direction: column;
	align-items: center;

	height: 573px;
	width: 510px;

	background: #ffffff;
	box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.8);
	border-radius: 10px;

	margin-top: 113px;

	.btns {
		display: flex;
		flex-direction: row;
		gap: 10px;

		.btn-save {
			width: 210px;
			height: 52px;

			border: 1px solid #1390e5;
			background: #1390e5;
			border-radius: 10px;

			font-family: Roboto;
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 24px;

			text-align: center;

			color: #ffffff;
		}

		.btn-no-save {
			width: 210px;
			height: 52px;

			border: 1px solid #1390e5;
			box-sizing: border-box;
			border-radius: 10px;

			font-family: Roboto;
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 24px;

			text-align: center;

			color: #1390e5;
		}
	}

	& > label {
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 28px;

		display: flex;
		align-items: center;
		text-align: center;

		color: #000000;

		margin: 36px 10px;
	}

	#label-input {
		display: flex;
		align-items: flex-start;
		flex-direction: column;

		.star {
			color: #ff0000;
		}

		.sortBy {
			pointer-events: none;
			overflow: hidden;
			appearance: none;
			width: 430px;
			height: 48px;

			border: 1px solid rgba(23, 23, 25, 0.2);
			border-radius: 10px;
			background: #ffffff;
			box-sizing: border-box;

			font-family: Roboto;
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 24px;

			display: flex;
			align-items: center;
			padding: 12px 15px;
			margin-bottom: 24px;

			color: #272727;
		}

		.sortBy:focus {
			outline: none !important;
			background: rgba(197, 228, 249, 0.3);
			border: 1px solid rgb(19, 144, 229);
		}

		.label {
			width: 230px;
			height: 22px;

			font-family: Roboto;
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 22px;
			color: #272727;
		}

		.input {
			width: 430px;
			height: 48px;

			border: 1px solid rgba(23, 23, 25, 0.2);
			border-radius: 10px;
			background: #ffffff;
			box-sizing: border-box;

			font-family: Roboto;
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 24px;

			display: flex;
			align-items: center;
			padding: 12px 15px;
			margin-bottom: 24px;

			color: #272727;
		}

		.input:focus {
			outline: none !important;
			background: rgba(197, 228, 249, 0.3);
			border: 1px solid rgb(19, 144, 229);
		}

		#qntnRange {
			flex-direction: row;
			margin-bottom: 36px;

			.maxQuontityRange {
				width: 310px;
				margin-right: 20px;
			}

			input[type='number'] {
				-moz-appearance: textfield;
			}
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button {
				-webkit-appearance: none;
				-moz-appearance: textfield;
			}

			.maxQuontityNumber {
				width: 100px;
				height: 48px;

				border: 1px solid rgba(23, 23, 25, 0.2);
				box-sizing: border-box;
				border-radius: 10px;

				font-family: Roboto;
				font-style: normal;
				font-weight: normal;
				font-size: 20px;
				line-height: 24px;

				text-align: center;
				padding: 12px 15px;

				color: #272727;
			}
		}
	}
}
</style>
