import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import './TodoList.css';

const TodoList = () => {
  const [item, setItem] = useState('');
  const [newItem, setNewItem] = useState([]);

  const handleInputChange = (event) => {
    setItem(event.target.value);
  };

  const handleAddItem = () => {
    if(item=='')
      {
        alert("Some task is required...")
      }
      else{
    setNewItem((prevItems) => [...prevItems, item]);
    setItem('');
      }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...newItem];
    updatedItems.splice(index, 1);
    setNewItem(updatedItems);
  };

  const handleDeleteAll = () => {
    setNewItem([]);
  };

  return (
    <div className="todo-list-container">
      <div className="delete-all-container">
        <Button className="delBtn" onClick={handleDeleteAll} style={{color:'#ffff',fontWeight:'bolder'}}>
          <DeleteIcon/> Delete All
        </Button>
      </div>
      <input
        type="text"
        value={item}
        placeholder="Enter Your Task..."
        onChange={handleInputChange}
        className="task-input"
      />
      <Button className="AddBtn" onClick={handleAddItem}>
      <span className='add_btn_container'>
        <Button className='add_btn'>Add</Button>
        <AddIcon />
      </span>
        
      </Button>
      <ul className="textFont">
        {newItem.map((val, index) => (
          <li key={index}>
            {val}
            <button className="delete-btn" onClick={() => handleDeleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
