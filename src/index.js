import VueYmap from "./vue-ymap.vue";

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("vue-ymap", VueYmap);
}

const plugin = {
	install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

VueYmap.install = install;

export default VueYmap;