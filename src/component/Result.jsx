import e from 'cors';
import React from 'react';

function Result({naverData, youtubeData}) {
    // let stringFromItem = selectedItem.join(' ')
    console.log(youtubeData, 'youtubeData in Result')
    
    return (
        <div className="section">
            <ul className='videos'>
                {
                    youtubeData && youtubeData.map((data) => 
                        <li className='video' onClick={() => {window.open(`http://www.youtube.com/watch?v=${data.id}`, '_blank')}}>
                            <p className='video_title'>{data.snippet.title}</p>
                            <p></p>
                            
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Result;