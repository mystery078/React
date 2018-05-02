import React from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductActionPage from './pages/ProductActionPage';

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <HomePage />
	},
	{
		path: '/products',
		exact: true,
		main: () => <ProductsPage />
	},
	{
		path: '/product/add',
		exact: false,
		main: ({history}) => <ProductActionPage history={history}/>
	},
	{
		path: '/product/update/:id',
		exact: true,
		main: ({match, history}) => <ProductActionPage match={match} history={history}/>
	},
	{
		path: '',
		exact: false,
		main: () => <NotFoundPage />
	},
];

export default routes;