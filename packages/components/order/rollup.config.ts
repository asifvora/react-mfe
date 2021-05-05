import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import externals from 'rollup-plugin-node-externals';
import json from 'rollup-plugin-json';
import tsPlugin from '@rollup/plugin-typescript';
import cleaner from 'rollup-plugin-cleaner';
import bundleScss from 'rollup-plugin-bundle-scss';

const commonPlugins = [
	json({}),
	babel({
		exclude: /node_modules/,
		runtimeHelpers: true,
		presets: [['@babel/preset-env', { modules: false }]],
		plugins: ['@babel/plugin-proposal-class-properties'],
	}),
	commonjs(),
	externals(),
	resolve({
		browser: true,
	}),
	tsPlugin(),
];

const config = [
	{
		input: './src/bundle.ts',
		plugins: [
			cleaner({
				targets: ['./dist/'],
			}),
			...commonPlugins,
		],
		output: {
			dir: 'dist',
			format: 'esm',
			exports: 'named',
		},
	},
	{
		input: './src/exports.tsx',
		plugins: [...commonPlugins],
		output: {
			dir: './dist/',
			format: 'esm',
			exports: 'named',
		},
	},
	// {
	// 	input: './src/scss/index.scss',
	// 	plugins: [
	// 		bundleScss({			
	// 			output: 'bundle.scss',
	// 		}),
	// 	],
	// },
];

export default config;
