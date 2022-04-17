import { getSetting } from "@/api/setting";
import { titleControl } from "@/utils";
export default {
    namespaced: 'setting',
    state: {
        loading: false,
        data: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchData(ctx) {
            ctx.commit('setLoading', true);
            const resp = await getSetting();
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);

            //<link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
            if (resp.favicon) {
                let link = document.querySelector('link[rel="shortcut icon"]');
                if (link) {
                    return;
                }
                link = document.createElement('link');
                link.rel = 'shortcut icon';
                link.type = "images/x-icon";
                link.href = resp.favicon;
                document.head.appendChild(link);
            }
            titleControl.setSiteTitle(resp.siteTitle);
        }
    }
}