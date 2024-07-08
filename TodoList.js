import TodoListItem from './TodoListItem';
import TodoListItemClean  from './TodoListItemClean';
import TodoListItemShopping  from './TodoListItemShopping';

function TodoList() {
    return (
        <>
        
        <h2>Daily Task's</h2>

        <ul>
            <TodoListItem text = "Grigor"/>
            <TodoListItem name = "Pesho"/>
            <TodoListItemClean/>
            <TodoListItemShopping/>
        <li>Make Dani's breakfast</li>
        <li>Make two cups of coffee</li>
        <li>Learn React</li>
        </ul>
        </>
    );
}
export default TodoList;