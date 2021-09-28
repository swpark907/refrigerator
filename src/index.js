import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import itemList from './ItemList';
import Naver from './service/naver_search';
import Youtube from './service/youtube_search';
import dotenv from "dotenv";
dotenv.config();

const naver_key = process.env.REACT_APP_NAVER_API_KEY;
const naver_secret = process.env.REACT_APP_NAVER_API_SECRET
const youtube_key = process.env.REACT_APP_YOUTUBE_API_NEW_KEY;

const naver = new Naver(naver_key, naver_secret)
const youtube = new Youtube(youtube_key);


ReactDOM.render(
  <React.StrictMode>
    <App itemsData={itemList} naver={naver} youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
