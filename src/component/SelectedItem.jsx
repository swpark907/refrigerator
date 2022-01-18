import React from 'react';

function SelectedItem({selectedItem}) {    
    return (
        <div className='selected-area'>
            <h3>선택한 재료</h3>
            <ul className='selected_items'>
            {
                selectedItem.map((item, i) => 
                    <li key={i} className='selected_item' id={item}>{item}<i className="fas fa-check"></i></li>
                )
            }
            </ul>
            
        </div>
    );
}

export default SelectedItem;