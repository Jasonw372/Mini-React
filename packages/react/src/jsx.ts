import { ReactElementType } from 'shared/ReactSymbols';
import type {
	Key,
	Ref,
	Props,
	ReactElement,
	ElementType
} from 'shared/ReactType';

// React Element
const ReactElement = function (
	type: ElementType,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement {
	const element: ReactElement = {
		$$type: ReactElementType,
		type,
		key,
		ref,
		props,
		__mark: 'huanyushi'
	};

	return element;
};

export const jsx = function (
	type: ElementType,
	config: any,
	...maybeChildren: any
) {
	console.log(type, config, maybeChildren);

	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}

		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}

		if (Object.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	const childrenLength = maybeChildren.length;
	if (childrenLength === 1) {
		props.children = maybeChildren[0];
	} else if (childrenLength > 1) {
		props.children = maybeChildren;
	}

	return ReactElement(type, key, ref, props);
};

export const jsxDEV = function (type: ElementType, config: any) {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}

		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}

		if (Object.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	return ReactElement(type, key, ref, props);
};
