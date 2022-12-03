import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import BookingCalendar from './components/BookingCalendar';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={<BookingCalendar />}
          />
          <Route
            exact
            path="/product"
            element={<ProductList />}
          />
          <Route
            path="/product/add"
            element={<AddProduct />}
          />
          <Route
            path="/product/edit/:id"
            element={<EditProduct />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
