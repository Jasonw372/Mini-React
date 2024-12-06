import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

export function resolvePkgPath(pkgName, isDist) {
	if (isDist) {
		return path.resolve(distPath, pkgName);
	}
	return path.resolve(pkgPath, pkgName);
}

export function getPackageJSON(pkgName) {
	const jsonPath = path.resolve(resolvePkgPath(pkgName), 'package.json');
	const str = fs.readFileSync(jsonPath, {
		encoding: 'utf-8'
	});
	return JSON.parse(str);
}

export function getBaseRollupPlugins({ typescript = {} } = {}) {
	return [cjs(), ts(typescript)];
}
