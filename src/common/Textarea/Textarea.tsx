import { ChangeEvent, FC } from 'react';

import './Textarea.scss';

interface TextareaProps {
	id: string;
	className?: string | undefined;
	labelText?: string;
	placeholder?: string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FC<TextareaProps> = ({
	id,
	className = '',
	labelText,
	...props
}) => (
	<div className={`custom-textarea ${className}`}>
		{labelText && (
			<label htmlFor={id} className='custom-textarea__label'>
				{labelText}
			</label>
		)}
		<textarea id={id} className='custom-textarea__field' {...props}></textarea>
	</div>
);

export default Textarea;
