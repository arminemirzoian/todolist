import { Button, ListGroup, ListGroupItem, Input } from 'reactstrap';
import './ToDoItem.css'
function ToDoItem({todo, onChange, onDelete}) {
return (
    <div>
        
        <ListGroup>
            <label>
            <ListGroupItem className="app-list-item d-flex justify-content-between">
            <Input type='checkbox' className="btn-checked" checked={todo.isCompleted} onChange={(e) => {
                onChange({
                    ...todo,
                    isCompleted: e.target.checked
                })
            }} />
            <span className='span-item'>{todo.text}</span>
            <Button outline color="secondary" onClick={() => {onDelete(todo);}}> X </Button>
            </ListGroupItem>
            </label>
            </ListGroup>
        
    </div>
)
}

export default ToDoItem;