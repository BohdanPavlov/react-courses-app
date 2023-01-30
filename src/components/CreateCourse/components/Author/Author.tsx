import { FC, MouseEvent } from 'react';

import Button from 'common/Button/Button';
import { IAuthor } from 'models/author.model';

import 'components/CreateCourse/components/Author/Author.scss';

interface AddAuthorProps {
	author?: IAuthor;
	onClickButton: (authorId: string) => void;
	buttonText: string;
}

const Author: FC<AddAuthorProps> = ({ author, onClickButton, buttonText }) => {
	function handleClick(e: MouseEvent, id: string | undefined): void {
		e.stopPropagation();
		if (id) {
			onClickButton(id);
		}
	}

	const removeBtnStyles = buttonText === 'Remove' ? 'author__btn_remove' : null;

	return (
		<div className='author'>
			<p className='author__name'>{author?.name}</p>
			<Button
				type='button'
				className={`author__btn ${removeBtnStyles}`}
				onClick={(e: MouseEvent) => handleClick(e, author?.id)}
			>
				{buttonText}
			</Button>
		</div>
	);
};

export default Author;
