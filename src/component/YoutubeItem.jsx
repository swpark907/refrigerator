import React from 'react';

const YoutubeItem = ({data}) => {
  return (
    <li className='video' onClick={() => {window.open(`http://www.youtube.com/watch?v=${data.id}`, '_blank')}}>
      <img src={data.snippet.thumbnails.medium.url} className='video_thumbnail' alt="'video_thumbnail'" />
      <div className='video_desc'>
          <h3 className='video_title'>{data.snippet.title}</h3>
          <p className='video_channel'>{data.snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default YoutubeItem;