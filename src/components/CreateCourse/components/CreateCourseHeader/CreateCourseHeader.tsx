import { FC } from 'react';
import Input from 'common/Input/Input';
import Button from 'common/Button/Button';
import Textarea from 'common/Textarea/Textarea';

import './CreateCourseHeader.scss';

interface CreateCourseHeaderProps {
	title: string;
	description: string;
	setTitle: (value: string) => void;
	setDescription: (value: string) => void;
}

const CreateCourseHeader: FC<CreateCourseHeaderProps> = ({
	title,
	description,
	setTitle,
	setDescription,
}) => (
	<div className='create-course-header'>
		<div className='create-course-header__title'>
			<Input
				className='create-course-header__input'
				id='title'
				labelText='Title'
				placeholder='Enter title...'
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<Button className='create-course-header__button'>Create course</Button>
		</div>
		<Textarea
			id='course-description'
			labelText='Description'
			placeholder='Enter description'
			value={description}
			onChange={(event) => setDescription(event.target.value)}
		/>
	</div>
);

export default CreateCourseHeader;
