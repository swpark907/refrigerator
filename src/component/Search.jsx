import React from 'react';

function Search({items}) {

    function autoComplete(e){
        const currentValue = e.target.value;
        const items = document.querySelectorAll('.item');
        items.forEach(li => {
            
            li.classList.remove('active');
            if(li.dataset.name.includes(e.target.value)){
                li.classList.add('active')
            }
        })

    }

    function selected(e){
        if(e.currentTarget.classList.contains('selected')){
            e.currentTarget.classList.remove('selected')
        } else{
        e.currentTarget.classList.add('selected')
    }
    }

    
    return (
        <div className='main'>
            <h2>냉털생활</h2>
            <input type="text" onChange={(e) => autoComplete(e)} />
            <ul className="items-list">
            {
                items.items.map((item) => 
                <li className="item active" onClick={e=>selected(e)} key={item.id} data-name={item.name}> {item.name} 
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