import React from 'react';

function Search({items}) {
    
    return (
        <div className='main'>
            <h2>냉털생활</h2>
            <input type="text" />
            <ul className="items-list">
            {
                items.items.map((item) => 
                <li className="item" key={item.id}> {item.name} 
                <button className='item-cancel'>X</button>
                </li>
                )
            }
            </ul>
            
            
            <button className='submit-btn'>냉장고털기</button>
        </div>
    );
}

export default Search;