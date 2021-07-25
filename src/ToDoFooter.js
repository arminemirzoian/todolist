import { Button } from 'reactstrap';
import './ToDoFooter.css';
function ToDoFooter ({todos, onClearCompleted}) {
    const completedSize = todos.filter((todo) => todo.isCompleted).length;
    
return (
    <div>
        <span className='span-footer'>{completedSize}/{todos.length} completed</span>
        <Button color="info" size="md" onClick={onClearCompleted}>Clear completed</Button>
    </div>
)

}

export default ToDoFooter;