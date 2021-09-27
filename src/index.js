import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import itemList from './ItemList';
import Naver from './service/naver_search';
import Youtube from './service/youtube_search';


const naver = new Naver('dmkfAOtx1dm8NTjBlBxe', 'lHhmoqqW3D')
const youtube = new Youtube('AIzaSyCXyT92wesjrZIXZkXmgO6Dul9J46oAfos');


ReactDOM.render(
  <React.StrictMode>
    <App itemsData={itemList} naver={naver} youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
