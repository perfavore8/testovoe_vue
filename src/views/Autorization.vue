<template>
	<div id="app">
		<div id="auto">
			<div class="logo"></div>
			<label id="entrance">Вход</label>
			<div id="label-input">
				<label for="login">login</label>
				<input class="input" type="text" id="login" name="login" v-model="user_info.login" />
			</div>
			<div id="label-input">
				<label for="password">password</label>
				<div>
					<input
						class="input"
						:type="showPassword ? 'text' : 'password'"
						id="password"
						name="password"
						v-model="user_info.password"
					/>
					<input
						type="checkbox"
						id="change"
						@click="showPassword = !showPassword"
						class="hideShow"
					/>
					<label for="change"></label>
				</div>
			</div>
			<button type="submit" @click="onSubmit">Войти</button>
		</div>
	</div>
</template>

<script>
import USERS_DB from '../../users.json';

export default {
	data() {
		return {
			user_info: {
				login: null,
				password: null,
			},
			showPassword: false,
		};
	},

	mounted() {
		const { token } = this.$store.state;
		if (localStorage[token]) {
			this.$router.push('/');
		}
	},

	methods: {
		onSubmit() {
			for (const user of USERS_DB) {
				if (user.login === this.user_info.login && user.password === this.user_info.password) {
					console.log('USER ACEPTED');
					this.$store.commit('setToken', btoa(`${this.user_info.username}:${this.user_info.password}`));
					this.$router.push('/');
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
#app {
	display: flex;
	justify-content: center;
}

.logo {
		width: 88px;
		height: 88px;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url('../assets/sibdev-logo.svg');
	}

#auto {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	padding: 50px;
	max-width: 512px;
	max-height: 520px;
	margin-top: 140px;

	background: #ffffff;
	border: 1px solid rgba(39, 39, 39, 0.1);
	box-sizing: border-box;
	border-radius: 10px;

	& > button {
		width: 176px;
		height: 52px;

		background: #1390e5;
		border: none;
		border-radius: 5px;

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
		margin-top: 20px;
	}
}

#entrance {
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 28px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #000000;
}

#label-input {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	& > label {
		color: rgba(23, 23, 25, 0.3);
		width: 117px;
		height: 22px;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 22px;
	}

	& > div {
		display: flex;
	}

	.input {
		width: 334px;
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
		color: #272727;
		padding: 12px 15px;
	}

	.input:focus {
		outline: none !important;
		background: rgba(197, 228, 249, 0.3);
		border: 1px solid rgb(19, 144, 229);
	}

	.hideShow {
		position: absolute;
		margin: 17px 16px 17px 296px;
		z-index: -1;
		opacity: 0;
	}

	.hideShow + label {
		display: inline-flex;
		align-items: center;
		user-select: none;
		position: absolute;
		margin: 13px 16px 13px 296px;
	}

	.hideShow + label::before {
		content: '';
		display: inline-block;
		width: 22px;
		height: 22px;
		flex-shrink: 0;
		flex-grow: 0;
		opacity: 0.5;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 100% 150%;
		background-image: url('../assets/eye-off.svg');
	}

	.hideShow:checked + label::before {
		background-image: url('../assets/eye.svg');
	}
}
</style>
