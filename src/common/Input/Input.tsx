import { ChangeEvent, FC } from 'react';

import './Input.scss';

interface InputProps {
	id: string;
	labelText?: string;
	type?: string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	placeholder?: string;
}

const Input: FC<InputProps> = ({
	id,
	labelText = '',
	type = 'text',
	className = '',
	...props
}) => (
	<div className={`custom-input ${className}`}>
		{labelText && (
			<label className='custom-input__label' htmlFor={id}>
				{labelText}
			</label>
		)}
		<input className='custom-input__field' id={id} type={type} {...props} />
	</div>
);

export default Input;
