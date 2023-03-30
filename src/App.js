import React from 'react';
import Globalstyle from './style/Globalstyle';
import { Route, Routes } from 'react-router-dom';
import { CreateMemo, Main } from './pages';

const App = () => {
  return (
    <>
      <Globalstyle />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/CreateMemo" element={<CreateMemo />}/>
      </Routes>
    </>
    
  );
}

export default App;
