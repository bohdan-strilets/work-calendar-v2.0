import { FC } from 'react'
import { ButtonProps } from '../../../types/props/ButtonProps'
import { Wrapper } from './Button.styled'

const Button: FC<ButtonProps> = ({
	children,
	variant,
	disabled,
	width,
	height,
	margin,
}) => {
	return (
		<Wrapper
			variant={variant}
			disabled={disabled}
			width={width}
			height={height}
			margin={margin}
		>
			{children}
		</Wrapper>
	)
}

export default Button
