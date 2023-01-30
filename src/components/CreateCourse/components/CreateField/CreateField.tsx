import { FC } from 'react';
import CreateTitle from 'components/CreateCourse/components/CreateTitle/CreateTitle';
import Input from 'common/Input/Input';

import './CreateField.scss';

interface CreateFieldProps {
	title: string;
	value: string;
	id: string;
	labelText: string;
	placeholder: string;
	setValue: (value: string) => void;
	render: () => JSX.Element;
}

const CreateField: FC<CreateFieldProps> = ({
	id,
	labelText,
	placeholder,
	title,
	value,
	setValue,
	render,
}) => (
	<div className='create-field'>
		<CreateTitle title={title} />
		<Input
			id={id}
			labelText={labelText}
			placeholder={placeholder}
			className='create-field__input'
			value={value}
			onChange={(event) => setValue(event.target.value)}
		/>
		{render()}
	</div>
);

export default CreateField;
