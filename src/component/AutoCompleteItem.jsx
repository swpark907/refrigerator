import React from "react";

const AutoCompleteItem = ({ item, addSelectedItem, selectedItem }) => {
  function selected(e) {
    if (e.currentTarget.classList.contains("selected")) {
      e.currentTarget.classList.remove("selected");
    } else {
      e.currentTarget.classList.add("selected");
    }
    addSelectedItem(e.currentTarget.dataset.name);
  }

  return (
    <li
      className={selectedItem.includes(item.name) ? "item selected" : "item"}
      onClick={(e) => selected(e)}
      key={item.id}
      data-name={item.name}
    >
      {item.name}
    </li>
  );
};

export default AutoCompleteItem;
