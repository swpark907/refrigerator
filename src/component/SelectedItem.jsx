import React from 'react';

function SelectedItem({selectedItem}) {
    
    return (
        <div className='selected-area'>
            고른 아이템이 뜰 곳입니다.
            {
                selectedItem.map(item => 
                    <li className={item}>item</li>
                )
            }
        </div>
    );
}

export default SelectedItem;