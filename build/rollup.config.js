import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue2';
import postcss from 'rollup-plugin-postcss'
import babel from "rollup-plugin-babel";
import uglify from 'rollup-plugin-uglify';
import buble from '@rollup/plugin-buble';
import image from '@rollup/plugin-image';

export default {
	input: 'src/index.js',
	output: {
		name: 'VueYmap',
		exports: 'named',
		globals: {
			'vue': 'vue',
			'vue-yandex-maps': 'vueYandexMaps',
		},
	},
	external: ['vue', 'vue-yandex-maps'],
	plugins: [
		vue({
			css: true,
			compileTemplate: true,
			preprocessStyles: true
		}),
		babel({ runtimeHelpers: true }),
		commonjs(),
		postcss(),
		image(),
		buble(),
		uglify.uglify()
	],
};