import React from 'react';

function Search({addSelectedItem, autoComplete, filteredItem, itemsData, resetSelected, selectedItem, connectAPI}) {

    

    function selected(e){
        if(e.currentTarget.classList.contains('selected')){
            e.currentTarget.classList.remove('selected')

        } else{
        e.currentTarget.classList.add('selected')        
        }
        addSelectedItem(e.currentTarget.dataset.name);
    }

    
    return (
        <div className="main">
            <h2>냉장고 털기</h2>
            <input className='search_input' type="text" onChange={(e) => autoComplete(e)} placeholder='찾기 힘들 땐 검색하세요!'/>
            <ul className="items-list">
            {
                filteredItem === undefined
                    ? itemsData.items.map((item) =>
                        selectedItem.includes(item.name) ? (
                            <li
                                className="item selected"
                                onClick={(e) => selected(e)}
                                key={item.id}
                                data-name={item.name}
                            >                    
                                {item.name}
                            </li>
                        ) : (
                            <li
                                className="item"
                                onClick={(e) => selected(e)}
                                key={item.id}
                                data-name={item.name}
                            >
                                {item.name}
                            </li>
                        )
                    )
                    : filteredItem.map((item) =>
                        selectedItem.includes(item.name) ? (
                            <li
                                className="item selected"
                                onClick={(e) => selected(e)}
                                key={item.id}
                                data-name={item.name}
                            >
                                {item.name}
                            </li>
                            ) : (
                            <li
                                className="item"
                                onClick={(e) => selected(e)}
                                key={item.id}
                                data-name={item.name}
                            >
                                {item.name}
                            </li>
                        )
            )}
            </ul>

            <button className="reset-selected" onClick={resetSelected}>
                다시 고르기
            </button>
            <button className="submit-btn" onClick={connectAPI}>냉장고털기</button>
        </div>
    );
}

export default Search;