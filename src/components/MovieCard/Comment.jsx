import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const Comment = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listOfItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("");
    };
    return (
        <>
            <input type="text" placeholder="Add a Item" onChange={itemEvent} value={inputList} />
            <Button onClick={listOfItem} className="btn_add"> <AddIcon /> </Button>
        </>
    )
};
export default Comment;