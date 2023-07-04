import { BrowserRouter } from 'react-router-dom';
// import './App.css';
// import Header from './containers/Header';
import Markup from './containers';
// import ProductList from './containers/ProductList';
// import ProductDetalis from './containers/ProductDetalis';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Markup />
      </BrowserRouter>
      {/* <Header/> */}
      {/* <Router>
        <Header/>
        <switch>
          <Route path='/' exact Component={ProductList}/>
          <Route path='/product/:productId'  exact Component={ProductDetalis}/>
          <Route>404 page not found</Route>
        </switch>
      </Router> */}
    </div>
  );
}

export default App;
