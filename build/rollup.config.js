import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue2';
import postcss from 'rollup-plugin-postcss'
import babel from "rollup-plugin-babel";
import svg from 'rollup-plugin-svg'
import uglify from 'rollup-plugin-uglify';
import buble from '@rollup/plugin-buble';
import { nodeResolve } from '@rollup/plugin-node-resolve';

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
		svg(),
		buble(),
		nodeResolve(),
		uglify.uglify()
	],
};