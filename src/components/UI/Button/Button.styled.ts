import styled from '@emotion/styled'
import { WrapperProps } from '../../../types/props/ButtonProps'

export const Wrapper = styled.button<WrapperProps>`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '50px')};
	margin: ${({ margin }) => (margin ? margin : '')};

	text-transform: uppercase;
	font-weight: 500;

	border: 2px solid var(--light-to-dark);
	border-radius: 25px;
	background-color: var(--dark-to-light);
	color: var(--light-to-dark);
	text-shadow: var(--text-shadow);
	box-shadow: var(--box-shadow), inset 0px 23px 0px rgba(255, 255, 255, 0.07);

	cursor: pointer;
	transition: background-color var(--hover-effect), color var(--hover-effect);

	:hover,
	:focus {
		background-color: var(--light-to-dark);
		color: var(--dark-to-light);
	}

	:active {
		transform: scale(0.99);
	}

	:disabled {
		filter: grayscale(1);
		pointer-events: none;
	}

	${({ variant }) => `
			--dark-to-light: ${
				variant === 'dark'
					? 'var(--dark-green-color)'
					: 'var(--light-green-color)'
			};
			--light-to-dark:${
				variant === 'dark'
					? 'var(--light-green-color)'
					: 'var(--dark-green-color)'
			};
	`}
`
