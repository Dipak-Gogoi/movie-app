import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Movies from './components/Movie/Movie';
import MovieList from '../src/components/Movie/MovieList';


const App = () => {
  return (
    <BrowserRouter>
    <>
      <div className="container">
        <Sidebar />
       <div className="">
       <Switch>
         <Route path='/' component={Movies} exact></Route>
         <Route path='/Movie' component={Movies} exact></Route>
         <Route path='/mylist' component={MovieList}></Route>
       </Switch>
       
   </div>
      </div>
    </>
    </BrowserRouter>
  );
};


export default App;
