import Main from './pages/Main';
import Users from './pages/Users'
import Search from './pages/Search';
import Originals from './pages/Originals';
import List from './pages/List';
import Catalog from './pages/Catalog';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import bannerReducer from './redux/bannerReducer';
import categoriesReducer from './redux/categoriesReducer';
import moviesReducer from './redux/moviesReducer';


import MobileBar from "./components/MobileBar";
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const combinedReducers = combineReducers({
    banners: bannerReducer,
    categories: categoriesReducer,
    movies: moviesReducer
  })

  const store = createStore(combinedReducers)

  return (
    <div className="App">
      <Router>        
      
        <Header/>
          <Provider store={store}>
            <Routes>
              <Route exact path='/' Component={Main}/>
              <Route path='/users' Component={Users}/>
              <Route path='/search' Component={Search}/>
              <Route path='/originals' Component={Originals}/>
              <Route path='/list' Component={List}/>
              <Route path='/catalog' Component={Catalog}/>
            </Routes>
          </Provider>
        <Footer/>
        <MobileBar></MobileBar>

      </Router> 
    </div>
  );
}

export default App;
