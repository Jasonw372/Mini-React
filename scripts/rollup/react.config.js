import {
	getBaseRollupPlugins,
	getPackageJSON,
	resolvePkgPath
} from './utils.js';
import path from 'path';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const { name, module } = getPackageJSON('react');
const pkgPath = resolvePkgPath(name);
const pkgDistPath = resolvePkgPath(name, true);

export default [
	{
		input: path.resolve(pkgPath, module),
		output: {
			file: path.resolve(pkgDistPath, 'index.js'),
			name: 'index.js',
			format: 'umd'
		},
		plugins: [
			...getBaseRollupPlugins(),
			generatePackageJson({
				inputFolder: pkgPath,
				outputFolder: pkgDistPath,
				baseContents: ({ name, description, version }) => ({
					name,
					description,
					version,
					main: 'index.js'
				})
			})
		]
	},
	{
		input: path.resolve(pkgPath, 'src/jsx.ts'),
		output: [
			{
				file: path.resolve(pkgDistPath, 'jsx-runtime.js'),
				name: 'jsx-runtime',
				format: 'umd'
			},
			{
				file: path.resolve(pkgDistPath, 'jsx-dev-runtime.js'),
				name: 'jsx-dev-runtime',
				format: 'umd'
			}
		],
		plugins: getBaseRollupPlugins()
	}
];
