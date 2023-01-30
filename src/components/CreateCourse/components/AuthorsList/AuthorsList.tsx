import { FC } from 'react';
import CreateTitle from 'components/CreateCourse/components/CreateTitle/CreateTitle';
import Author from 'components/CreateCourse/components/Author/Author';
import { IAuthor } from 'models/author.model';
import { mockedAuthorsList } from '../../../../constants';

import './AuthorsList.scss';

interface AuthorsListProps {
	authors: IAuthor[];
	title: string;
	onClickButton: (authorId: string) => void;
	courseAuthorsIds?: Array<string>;
	buttonText: string;
}

const AuthorsList: FC<AuthorsListProps> = ({
	authors,
	onClickButton,
	title,
	buttonText,
	courseAuthorsIds,
}) => (
	<div className='authors'>
		<CreateTitle title={title} />
		{courseAuthorsIds ? (
			courseAuthorsIds.length > 0 ? (
				courseAuthorsIds.map((authorId: string) => {
					const author = mockedAuthorsList.find(
						(author: IAuthor) => author.id === authorId
					);
					return (
						<Author
							key={author?.id}
							author={author}
							onClickButton={onClickButton}
							buttonText={buttonText}
						/>
					);
				})
			) : (
				<div className='authors__empty'>Please add authors of this course!</div>
			)
		) : (
			authors.map((author: IAuthor) => (
				<Author
					key={author.id}
					author={author}
					onClickButton={onClickButton}
					buttonText={buttonText}
				/>
			))
		)}
	</div>
);

export default AuthorsList;
