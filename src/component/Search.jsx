import React, { useRef } from 'react';

function Search({addSelectedItem, autoComplete, filteredItem, itemsData}) {

    

    function selected(e){
        if(e.currentTarget.classList.contains('selected')){
            e.currentTarget.classList.remove('selected')

        } else{
        e.currentTarget.classList.add('selected')
        addSelectedItem(e.currentTarget.dataset.name);
        console.log(e.currentTarget.dataset.name)
        }
    }

    

    function resetSelected(){
        // items.forEach(li => {
        //     console.log(li)
        //     li.classList.remove('selected');
        // })
    }

    
    return (
        <div className='main'>
            <h2>냉장고 털기</h2>
            <input type="text" onChange={(e) => autoComplete(e)} />
            <ul className="items-list" >
                {   filteredItem === undefined ? 
                    itemsData.items.map((item) => 
                    <li className="item active" onClick={e=>selected(e)} key={item.id} data-name={item.name}> {item.name} </li>
                    )
                :
                    filteredItem.map((item) => 
                    <li className="item active" onClick={e=>selected(e)} key={item.id} data-name={item.name}> {item.name} </li>
                    )
                }
            </ul>
            
            <button className='reset-selected' onClick={resetSelected}>다시 고르기</button>
            <button className='submit-btn'>냉장고털기</button>
        </div>
    );
}

export default Search;