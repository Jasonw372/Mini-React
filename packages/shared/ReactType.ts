export type ElementType = any;
export type Key = any;
export type Ref = any;
export type Props = {
	[key: string]: any;
	children?: ReactElement;
};

export interface ReactElement {
	$$type: symbol | number;
	type: ElementType;
	key: Key;
	ref: Ref;
	props: Props;
	__mark: 'huanyushi';
}
