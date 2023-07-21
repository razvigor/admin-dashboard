import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Layout from './Layout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/users'>
						<Route index element={<UserList />} />
						<Route path=':userId' element={<User />} />
					</Route>
					<Route path='/newUser' element={<NewUser />} />
					<Route path='/products'>
						<Route index element={<ProductList />} />
						<Route path=':productId' element={<Product />} />
					</Route>
					<Route path='/newproduct' element={<NewProduct />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
