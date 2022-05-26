import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { InventoryProvider } from './context/inventory/InventoryContext';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import Header from './components/Header'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<>
			<Router>

				<ScrollToTop />

				<InventoryProvider>

					<Header />

					<div className="section section-main">
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/products' element={<ProductList />} />
							<Route path='/products/:id' element={<ProductDetails />} />
							<Route path='/cart' element={<Cart />} />

							<Route path='**' element={<Navigate replace to='/' />} />
						</Routes>
					</div>

					<Footer />

				</InventoryProvider>
			</Router>
		</>
	);
}

export default App;
