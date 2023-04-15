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

  let editMode = 0; // Index of the currently editing label
  let editedLabel = ''; // Value of the currently editing label

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
  <button class="button-addTask" type="button" on:click={addNewTask}>Add task</button>
  <ul class="ul-listTasks"></ul>
</div>

<style>

</style>