import { useState } from 'react';
import { Routes, Route } from "react-router-dom"

import { AdForm } from './components/AdForm/AdForm';
import { Header } from './components/Header/Header';
import { Map } from './components/Map/Map';
import { SearchContext } from './context/searchContext';

export const App = () => {
  const [search, setSearch] = useState('')

  return (
    <SearchContext.Provider value={{ search, setSearch}}>
      <Header />
      <Routes>
        <Route path="/" element={<Map />}/>
        <Route path="/add-ad" element={<AdForm />}/>
      </Routes>
    </SearchContext.Provider>
  );
}
