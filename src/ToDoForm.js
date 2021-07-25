import { Input, Button } from 'reactstrap';
import { useState } from "react";

function ToDoForm ({onAdd}) {
    const [text, setText] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText('');
        }}>
            <div className="input-group mb-3">
            <Input type='text' className="form-control"  value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <Button className="btn btn-outline-secondary">Add</Button>
            </div>
        </form>
        
    )

}

export default ToDoForm;