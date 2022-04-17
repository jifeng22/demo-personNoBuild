// const listeners = {}
// export default {
//     $on (eventName, handle) {
//         if(!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handle);
//     },
//     $off(eventName, handle) {
//         if(!listeners[eventName]) {
//             return;
//         }
//         listeners[eventName].delete(handle);
//     },
//     $emit(eventName, ...args) {
//         if(!listeners[eventName]) {
//             return;
//         }
//         for(const handle of listeners[eventName]) {
//             handle(...args);
//         }
//     }
// }
import Vue from 'vue';
const app = new Vue({})
Vue.prototype.$bus = app;
export default app;
// export default new Vue({});