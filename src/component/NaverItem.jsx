import React from 'react';

const NaverItem = ({data}) => {
  const newTitle = data.title.replace(/(<([^>]+)>)/ig," ");
  const newDesc = data.description.replace(/(<([^>]+)>)/ig," ");
  return (
    <li className='blog' onClick={() => {window.open(`${data.link}`, '_blank')}}>                            
      <h3 className='blog_title'>{newTitle}</h3>
      <p className='blog_desc'>{newDesc}</p>
      <p className='blog_blogger'>{data.bloggername}</p>                            
    </li>
  );
};

export default NaverItem;