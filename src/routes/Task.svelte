<script>
  import Task from './NewTask.svelte';
  let taskList = [];

  function deleteTask(event) {
    const listTaskElement = document.querySelector('.li-newtask');
    listTaskElement.remove();
  }


  function createTask(event) {
    const inputElement = event.target.parentNode.querySelector('.input-nameTask');
    const inputValue = inputElement.value;

    const newTask = new Task({
      target: event.target.parentNode.querySelector('.list-Task'),
      props: { inputValue },
    });

    taskList = [...taskList, newTask];
    inputElement.value = '';

    const inputNameTask = event.target.parentNode.querySelector('.input-nameTask');
    inputNameTask?.setAttribute('hidden', true);
    const inputNameTask1 = event.target.parentNode.querySelector('.button-add');
    inputNameTask1?.setAttribute('hidden', true);
    const deleteTask = event.target.parentNode.querySelector('.button-delete');
    deleteTask?.removeAttribute('hidden');
  }

</script>

<li class="li-newtask">
  <input class="input-nameTask" type="text" name="item1-textfield" placeholder="Name Task....">
  <button class="button-add" type="button" on:click={(event) => createTask(event)}>Add</button>
  <ul class="list-Task">
    <button class="button-delete" type="button" hidden on:click={(event) => deleteTask(event)}>Delete</button>
  </ul>
</li>

<style>
</style>
