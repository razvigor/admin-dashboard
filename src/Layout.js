import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Topbar />
			<div className='container'>
				<Sidebar />
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
