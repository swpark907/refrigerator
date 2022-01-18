import e from 'cors';
import React, { useState } from 'react';
import Loading from './Loading';
import NaverItem from './NaverItem';
import YoutubeItem from './YoutubeItem';

function Result({naverData, youtubeData, NLoading, YLoading}) {       
    
    return (
        <div className="result_section">
            <ul className='results' id='naver'>
                
                    {   NLoading ?
                        <Loading/>
                        : naverData && naverData.map((data) => {
                                const newTitle = data.title.replace(/(<([^>]+)>)/ig," ");
                                const newDesc = data.description.replace(/(<([^>]+)>)/ig," ");
                                return (
                                    <NaverItem data={data}/>
                                )
                            }
                        )
                    }
                
                
            </ul>
            <ul className='results' id='youtube'>
                {   YLoading ?
                    <Loading/>
                    : youtubeData && youtubeData.map((data, i) => 
                            <YoutubeItem key={i} data={data}/>
                    )
                }
            </ul>
            
        </div>
    );
}

export default Result;