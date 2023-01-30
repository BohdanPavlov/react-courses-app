import React from 'react';

import Logo from 'components/Header/components/Logo/Logo';
import Button from 'common/Button/Button';

import 'components/Header/Header.scss';

const Header = () => (
	<header className='header'>
		<Logo />
		<div className='header__controls'>
			<h2 className='header__username'>Bohdan</h2>
			<Button type='button' className='header__button'>
				Logout
			</Button>
		</div>
	</header>
);

export default Header;
