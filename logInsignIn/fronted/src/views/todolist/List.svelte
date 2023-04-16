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
</script>

<div class="task">
    <li class="title-Task">{name}</li>
    <button class="button-addTask" type="button" on:click={addNewTask}>Add task</button>
    <ul class="ul-listTasks"></ul>
</div>

<style>

</style>