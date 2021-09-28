import e from 'cors';
import React from 'react';

function Result({naverData, youtubeData}) {
    // let stringFromItem = selectedItem.join(' ')
    console.log(youtubeData, 'youtubeData in Result')
    
    return (
        <div className="result_section">
            <ul className='results' id='naver'>
                
                {
                    naverData && naverData.map((data) => {
                        const newTitle = data.title.replace(/(<([^>]+)>)/ig," ");
                        const newDesc = data.description.replace(/(<([^>]+)>)/ig," ");
                        return (
                            <li className='blog' onClick={() => {window.open(`${data.link}`, '_blank')}}>                            
                            <h3 className='blog_title'>{newTitle}</h3>
                            <p className='blog_desc'>{newDesc}</p>
                            <p className='blog_blogger'>{data.bloggername}</p>                            
                        </li>
                        )
                    }
                        
                    )
                }
            </ul>
            <ul className='results' id='youtube'>
                {
                    youtubeData && youtubeData.map((data) => 
                        <li className='video' onClick={() => {window.open(`http://www.youtube.com/watch?v=${data.id}`, '_blank')}}>
                            <img src={data.snippet.thumbnails.medium.url} className='video_thumbnail' alt="'video_thumbnail'" />
                            <div className='video_desc'>
                                <h3 className='video_title'>{data.snippet.title}</h3>
                                <p>{data.snippet.channelTitle}</p>
                            </div>
                            
                            
                        </li>
                    )
                }
            </ul>
            
        </div>
    );
}

export default Result;