import React from 'react';
import AutoCompleteItem from './AutoCompleteItem';

function Search({addSelectedItem, autoComplete, filteredItem, itemsData, resetSelected, selectedItem, connectAPI}) {

    
    return (
        <div className="main">
            <h2>냉장고 털기</h2>
            <input className='search_input' type="text" onChange={autoComplete} placeholder='찾기 힘들 땐 검색하세요!'/>
            <ul className="items-list">
            {
                filteredItem === undefined
                    ? itemsData.items.map((item) =>
                    <AutoCompleteItem item={item} addSelectedItem={addSelectedItem} selectedItem={selectedItem}/>
                    )
                    : filteredItem.map((item) =>
                    <AutoCompleteItem item={item} addSelectedItem={addSelectedItem} selectedItem={selectedItem}/>
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