import { useState } from 'react'

import './App.css'
import Book from './component/Book'
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import Page4 from './component/Page4';
import Page5 from './component/Page5';
import Page6 from './component/Page6';
import Page7 from './component/Page7';
import Page8 from './component/Page8';
import Page9 from './component/Page9';
function App() {
  const pages = [
     <Page1/>,
    <Page2/>,
    <Page3/>,
    <Page4/> ,
    <Page5/>,
    <Page6/>,
    <Page7/>,
    <Page8/>,
    <Page9/>
  ];


  return (
    <>
      <Book pages={pages} />
    </>
  )
}

export default App
