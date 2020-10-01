import React from 'react';

export const TodosList = (props) => {
   const [ error, setError ] = React.useState(null);
   
   const handleCreate = (e) => {
      e.preventDefault();
      const createInput = this.refs.createInput;
      const task = createInput.value;
      const validateInput = this.validateInput(task);

      if (validateInput) {
         this.setState({ error: validateInput });
         return;
      }
      
      this.props.createTask(task);
      this.refs.createInput.value = '';
   }

   const validateInput = (task) => {
      if (!task) {
         return 'Please enter a task.';
      } else if (_.find(this.props.todos, (todo) => todo.task === task)) {
         return 'Task already exists.';
      } else {
         return null;
      }
   }

   return (
      <form onSubmit={this.handleCreate.bind(this)}>
         <input
            type="text"
            placeholder="What do I need to do?"
            ref="createInput"
         />
         <button>Create</button>
         {this.renderError()}
      </form>
   );
}
