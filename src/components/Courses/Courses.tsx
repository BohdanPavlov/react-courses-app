import { FC, useState } from 'react';

import SearchBar from 'components/Courses/components/SearchBar/SearchBar';
import CourseCard from 'components/Courses/components/CourseCard/CourseCard';
import Button from 'common/Button/Button';

import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { ICourse } from 'models/course.model';
import { IAuthor } from 'models/author.model';

import './Courses.scss';

interface CoursesProps {
	onStartCreatingCourse: () => void;
}

const Courses: FC<CoursesProps> = ({ onStartCreatingCourse }) => {
	const [courses, setCourses] = useState<ICourse[]>(mockedCoursesList);
	const [authors, setAuthors] = useState<IAuthor[]>(mockedAuthorsList);

	function handleSearch(searchQuery: string): void {
		if (!searchQuery) {
			setCourses(() => mockedCoursesList);
			return;
		}

		const searchedCourses = courses.filter(
			(course) =>
				course.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
				course.title.toLowerCase().includes(searchQuery.toLowerCase())
		);

		setCourses(() => searchedCourses);
	}

	return (
		<div className='courses'>
			<div className='courses-search'>
				<SearchBar onSearch={handleSearch} />
				<Button
					type='button'
					className='courses-search__button'
					onClick={onStartCreatingCourse}
				>
					Add new course
				</Button>
			</div>
			<ul className='courses-cards'>
				{courses.map((course: ICourse) => (
					<CourseCard key={course.id} course={course} authorsArr={authors} />
				))}
			</ul>
		</div>
	);
};

export default Courses;
