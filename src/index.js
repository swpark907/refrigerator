import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import itemList from './ItemList';
import Naver from './service/naver_search';
import Youtube from './service/youtube_search';


const naver = new Naver('dmkfAOtx1dm8NTjBlBxe', 'lHhmoqqW3D')
naver.search('frontend');
const youtube = new Youtube('AIzaSyCXyT92wesjrZIXZkXmgO6Dul9J46oAfos');
youtube.search('돼지고기 양파 대파');

ReactDOM.render(
  <React.StrictMode>
    <App itemsData={itemList} /*naver={naver}*//>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
