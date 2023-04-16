<script>
  export let name = '';
  import Task from './Task.svelte';

  function addNewTask(event) {
    if (name) {
      const newTask = new Task({
        target: event.target.parentNode.querySelector('.ul-listTasks'),
      });
    }
    editMode = 0;
  }

  let editMode = 0;
  let editedLabel = '';

  function startEditing() {
    if (editedLabel !== name) {
      editedLabel = name; // Set the initial value of the editing label
      editMode = 1;
      console.log(editMode);
    }
  }

  function saveEditing() {
    name = editedLabel; // Update the label in the labels array
    editMode = 0; // Reset the editing index when editing is finished
    console.log(editMode);
  }
</script>

<div class="task">
  <li class="title-Task" on:click={() => startEditing()}>
    {#if editMode === 1}
      <input type="text" bind:value={editedLabel} /> <!-- Use an input element for editing -->
      <button on:click={saveEditing}>Save</button> <!-- Use a button to save changes -->
    {:else}
      {name}
    {/if}
  </li>
  <button class="button-AddTask" type="button" on:click={addNewTask}>Add task</button>
  <ul class="ul-listTasks"></ul>
</div>

<style>
.task {
  position: relative;
  top: -210px; 
  left: -230px;
  background-color: rgb(176, 232, 164);
  padding: 10px;
  border: 2.8px solid rgb(80, 131, 76);
  border-radius: 5px;
  width: 142%;
  margin-bottom: 20px;
}

.title-Task {
  font-size: 20px;
  font-weight: bold;
  color: rgb(46, 119, 46);
  margin-right: 10px;
  white-space: nowrap;
}

.button-AddTask {
  background-color: rgb(71, 106, 95);
  border: none;
  color: white;
  border-radius: 54px;
  white-space: nowrap;
  padding: 5px 13px;
  text-align: center;
  display: inline-block;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.ul-listTasks {
  list-style: none;
  padding-left: 0;
  white-space: nowrap;
}
</style>