import { Dispatch, FC, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CreateField from 'components/CreateCourse/components/CreateField/CreateField';
import Button from 'common/Button/Button';
import AuthorsList from 'components/CreateCourse/components/AuthorsList/AuthorsList';
import { pipeDuration } from 'helpers/pipeDuration';
import { IAuthor } from 'models/author.model';
import { mockedAuthorsList } from '../../../../constants';

import './CreateCourseMain.scss';

interface CreateCourseMainProps {
	duration: string;
	setDuration: (value: string) => void;
	authors: IAuthor[];
	setAuthors: Dispatch<SetStateAction<IAuthor[]>>;
	courseAuthorsIds: Array<string>;
	setCourseAuthorsIds: Dispatch<SetStateAction<string[]>>;
}

const CreateCourseMain: FC<CreateCourseMainProps> = ({
	duration,
	setDuration,
	authors,
	setAuthors,
	courseAuthorsIds,
	setCourseAuthorsIds,
}) => {
	const [authorName, setAuthorName] = useState<string>('');

	const durationInHours = pipeDuration(Number(duration));

	function createAuthor(): void {
		const newAuthor: IAuthor = {
			id: uuidv4(),
			name: authorName,
		};

		setAuthors([...authors, newAuthor]);
		mockedAuthorsList.push(newAuthor);
		setAuthorName('');
	}

	function addAuthorId(authorId: string): void {
		setCourseAuthorsIds((authorsIds: string[]) => [...authorsIds, authorId]);
		setAuthors((authors) => authors.filter((author) => authorId !== author.id));
	}

	function removeAuthorId(authorId: string | undefined): void {
		if (authorId) {
			setCourseAuthorsIds((authorsIds: string[]) =>
				authorsIds.filter((id) => authorId !== id)
			);
		}
	}

	return (
		<div className='create-course-main'>
			<div className='create-course-main__left'>
				<CreateField
					id='course-author'
					title='Add author'
					labelText='Add author'
					placeholder='Enter author name ...'
					value={authorName}
					setValue={setAuthorName}
					render={() => (
						<Button
							type='button'
							className='create-field__button'
							onClick={createAuthor}
						>
							Create author
						</Button>
					)}
				/>
				<CreateField
					id='course-duration'
					title='Duration'
					labelText='Add duration'
					placeholder='Enter duration in minutes ...'
					value={duration}
					setValue={setDuration}
					render={() => (
						<p className='create-field__duration'>
							Duration:{' '}
							<span className='create-field__duration_bold'>
								{durationInHours}
							</span>{' '}
							hours
						</p>
					)}
				/>
			</div>
			<div className='create-course-main__right'>
				<AuthorsList
					title='Authors'
					authors={authors}
					onClickButton={addAuthorId}
					buttonText='Add author'
				/>
				<AuthorsList
					title='Course authors'
					authors={authors}
					onClickButton={removeAuthorId}
					courseAuthorsIds={courseAuthorsIds}
					buttonText='Remove'
				/>
			</div>
		</div>
	);
};

export default CreateCourseMain;
