import e from 'cors';
import React from 'react';

function Result({naverData, youtubeData}) {
    // let stringFromItem = selectedItem.join(' ')
    console.log(youtubeData, 'youtubeData in Result')
    
    return (
        <div className="section">
            <ul className='videos' id='youtube'>
                {
                    youtubeData && youtubeData.map((data) => 
                        <li className='video' onClick={() => {window.open(`http://www.youtube.com/watch?v=${data.id}`, '_blank')}}>
                            <img src={data.snippet.thumbnails.medium.url} className='video_thumbnail' alt="'video_thumbnail'" />
                            <p className='video_title'>{data.snippet.title}</p>
                            <p></p>
                            
                        </li>
                    )
                }
            </ul>
            <ul className='videos' id='naver'>
                {
                    naverData && naverData.map((data) => 
                        <li className='blog' onClick={() => {window.open(`${data.link}`, '_blank')}}>                            
                            <p className='blog_title'>{data.title}</p>
                            <p></p>
                            
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Result;