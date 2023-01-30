import { ChangeEvent, FC, useState } from 'react';

import Input from 'common/Input/Input';
import Button from 'common/Button/Button';

import './SearchBar.scss';

interface SearchBarProps {
	onSearch: (str: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
	const [searchQuery, setSearchQuery] = useState<string>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const value = e.target.value;

		if (!value) {
			onSearch(value);
		}

		setSearchQuery(value);
	};

	return (
		<div className='search-bar'>
			<Input
				id='search'
				placeholder='Enter course name...'
				className='search-bar__input'
				value={searchQuery}
				onChange={handleChange}
			/>
			<Button
				type='button'
				className='search-bar__button'
				onClick={() => onSearch(searchQuery)}
			>
				Search
			</Button>
		</div>
	);
};

export default SearchBar;
