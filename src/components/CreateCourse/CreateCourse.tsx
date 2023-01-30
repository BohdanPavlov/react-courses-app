import { FC, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CreateCourseHeader from 'components/CreateCourse/components/CreateCourseHeader/CreateCourseHeader';
import CreateCourseMain from 'components/CreateCourse/components/CreateCourseMain/CreateCourseMain';
import { getCreationDate } from 'helpers/getCreationDate';
import { IAuthor } from 'models/author.model';
import { ICourse } from 'models/course.model';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';

import './CreateCourse.scss';

interface CreateCourseProps {
	onCreateCourse: () => void;
}

const CreateCourse: FC<CreateCourseProps> = ({ onCreateCourse }) => {
	const [authors, setAuthors] = useState<IAuthor[]>(mockedAuthorsList);
	const [courseAuthorsIds, setCourseAuthorsIds] = useState<string[]>([]);
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [duration, setDuration] = useState<string>('');

	function createNewCourse(e: FormEvent<HTMLFormElement>): void | null {
		e.preventDefault();

		const newCourse: ICourse = {
			id: uuidv4(),
			title,
			description,
			creationDate: getCreationDate(),
			duration: Number(duration),
			authorsIds: [...courseAuthorsIds],
		};

		const isAllFieldsPassed =
			Object.values(newCourse).filter((value) => !value).length === 0;

		if (!isAllFieldsPassed) {
			alert('Please fill all fields!');
			return null;
		}

		mockedCoursesList.push(newCourse);

		onCreateCourse();
	}

	return (
		<form className='create-course' onSubmit={createNewCourse}>
			<CreateCourseHeader
				title={title}
				description={description}
				setTitle={setTitle}
				setDescription={setDescription}
			/>
			<CreateCourseMain
				duration={duration}
				setDuration={setDuration}
				authors={authors}
				setAuthors={setAuthors}
				courseAuthorsIds={courseAuthorsIds}
				setCourseAuthorsIds={setCourseAuthorsIds}
			/>
		</form>
	);
};

export default CreateCourse;
