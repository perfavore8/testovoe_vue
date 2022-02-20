import { createStore } from 'vuex';

interface Favorite {
    id: string;
    req: string;
    name: string;
    sortBy: string;
    maxQuontity: number;
}

interface Store {
    isModalVisible: boolean;
    search: string;
    token: string;
    favorites: Favorite[];
    EditFav: Favorite;
}

export default createStore<Store>({
	state() {
		return {
			isModalVisible: false,
			search: '',
			token: localStorage.token ?? '',
			favorites: JSON.parse(localStorage?.[localStorage.token] ?? '[]'),
			EditFav: {
				id: '',
				req: '',
				name: '',
				sortBy: '',
				maxQuontity: 12
			}
		};
	},
	mutations: {
		comeOut(state) {
			state.token = '';
			localStorage.setItem('token', '');
		},
		setSearch(state, search: string) {
			state.search = search;
		},
		setToken(state, token: string) {
			state.token = token;
			if (localStorage[token] === undefined) {
				localStorage.setItem(token, JSON.stringify([]));
			}
			localStorage.setItem('token', token);
		},
		setFavorites(state, favorites: Favorite[]) {
			localStorage.setItem(state.token, JSON.stringify(favorites));
			state.favorites = favorites;
		},
		showModal(state, isModalVisible: boolean) {
			state.isModalVisible = isModalVisible;
		},
		setEditFav(
			state,
			EditFav: {
                id: '';
                req: '';
                name: '';
                sortBy: '';
                maxQuontity: 25;
            }
		) {
			state.EditFav = EditFav;
		}
	},
	actions: {},
	modules: {}
});
