import { useState } from 'react';

import Header from 'components/Header/Header';
import Courses from 'components/Courses/Courses';
import CreateCourse from 'components/CreateCourse/CreateCourse';

const App = () => {
	const [isCreatingCourse, setIsCreatingCourse] = useState<boolean>(false);

	function onStartCreatingCourse() {
		setIsCreatingCourse(true);
	}

	function onCreateCourse() {
		setIsCreatingCourse(false);
	}

	const content = isCreatingCourse ? (
		<CreateCourse onCreateCourse={onCreateCourse} />
	) : (
		<Courses onStartCreatingCourse={onStartCreatingCourse} />
	);

	return (
		<div className='container'>
			<Header />
			{content}
		</div>
	);
};

export default App;
