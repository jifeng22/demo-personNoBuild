import { getAbout } from "@/api/about";

export default {
    namespaced: 'about',
    state: {
        loading: false,
        data: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchData(ctx) {
            if(ctx.state.data) {
                return;
            }
            ctx.commit('setLoading', true);
            const resp = await getAbout();
            console.log(resp);
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false)
        }
    }
}