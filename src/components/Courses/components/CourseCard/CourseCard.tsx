import React, { FC } from 'react';

import Button from 'common/Button/Button';
import { ICourse } from 'models/course.model';
import { IAuthor } from 'models/author.model';
import { getAuthorsNames } from 'helpers/getAuthorsNames';
import { pipeDuration } from 'helpers/pipeDuration';
import { transformCreationDate } from 'helpers/transformCreationDate';

import './CourseCard.scss';

interface CourseCardProps {
	course: ICourse;
	authorsArr: IAuthor[];
}

const CourseCard: FC<CourseCardProps> = ({
	course: { title, description, authorsIds, duration, creationDate },
	authorsArr,
}) => {
	const authorsNames = getAuthorsNames(authorsIds, authorsArr);
	const transformedDuration = pipeDuration(duration);
	const transformedCreationDate = transformCreationDate(creationDate);

	return (
		<div className='card'>
			<div className='card-main'>
				<h2 className='card-main__title'>{title}</h2>
				<p className='card-main__description'>{description}</p>
			</div>
			<div className='card-secondary'>
				<div className='card-secondary__info'>
					<p>
						<strong>Authors: </strong>
						{authorsNames}
					</p>
					<p>
						<strong>Duration: </strong>
						<span>{transformedDuration} hours</span>
					</p>
					<p>
						<strong>Created: </strong>
						<span>{transformedCreationDate}</span>
					</p>
				</div>
				<Button type='button' className='card-secondary__button'>
					Show course
				</Button>
			</div>
		</div>
	);
};

export default CourseCard;
