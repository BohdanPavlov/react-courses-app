import { FC, MouseEvent, PropsWithChildren } from 'react';

import './Button.scss';

interface ButtonProps extends PropsWithChildren {
	className?: string;
	onClick?: (e: MouseEvent) => void;
	type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<ButtonProps> = ({
	className,
	onClick,
	children,
	type = 'submit',
	...props
}) => (
	<button
		type={type}
		className={`custom-button ${className}`}
		onClick={onClick}
		{...props}
	>
		{children}
	</button>
);

export default Button;
