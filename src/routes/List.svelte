<script>
    export let name = '';
    import Task from './Task.svelte';

    function addNewTask(event) {
      if (name) {
        const newTask = new Task({
          target: event.target.parentNode.querySelector('.ul-listTasks'),
        });
      }
    }

    function deleteTaskList() {
      const taskDiv = document.querySelector('.task');
      taskDiv.remove();
    }
</script>

<div class="task">
    <li class="title-Task">{name}</li>
    <button class="button-addTask" type="button" on:click={addNewTask}>Add task</button>
    <button class="button-deleteList" type="button" on:click={deleteTaskList}>Delete List</button>
    <ul class="ul-listTasks"></ul>
</div>

<style>

</style>