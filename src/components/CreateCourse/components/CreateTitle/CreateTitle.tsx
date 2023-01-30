import { FC } from 'react';

import './CreateTitle.scss';

interface CreateTitleProps {
	title: string;
}

const CreateTitle: FC<CreateTitleProps> = ({ title }) => (
	<h3 className='create-title'>{title}</h3>
);

export default CreateTitle;
