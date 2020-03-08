import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import MyModal from './MyModal';
import Search from './Search';

function App() {
  return (
    <div className="App">
     
      <Search />
      <MyModal editMode={false}/>
      <MovieList />
    </div>
  );
}

export default App;
