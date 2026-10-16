import Description from '@salesforce/schema/Account.Description';
import { LightningElement, track } from 'lwc';

export default class Todolist extends LightningElement {
    @track todos = [];
    todoId = 1;
    todo = {
        Id: this.todoId,
        Title: '',
        Description: ''
    }

    handleTitleChange(event) {
        event.preventDefault();
        let { value, name, lable } = event.target;
        this.todo.Title = value;
    }

    handleDescriptionChange(event) {
        event.preventDefault();
        let { value, name, lable } = event.target;
        this.todo.Description = value;
    }

    handleClick(event) {
        event.preventDefault();
        this.todos.push(
            Object.assign({}, this.todo)
        );
        this.todoId++;
        this.todo = {
            Id: this.todoId,
            Title: '',
            Description: ''
        };
    }

    handleTodoClick(event) {
        event.preventDefault();
        let dataset = event.currentTarget.dataset;
        let todoTitle = dataset.todoTitle;
        let todoDescription = dataset.description;
        console.log('Todo Title: ' + todoTitle);
        console.log('Todo Description: ' + todoDescription);

        let selectedTodo = this.todos.find((todo) => {
            return todo.Title === todoTitle && todo.Description === todoDescription;
        });
        console.log('Selected Todo: ' + JSON.stringify(selectedTodo));
    }
}