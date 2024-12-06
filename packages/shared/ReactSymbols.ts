const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const ReactElementType = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;
