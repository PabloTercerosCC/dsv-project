<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  $: ({ tasks } = data);
  
  let taskName = "";
  async function addTask() {
    if (taskName.trim() !== "") {
      const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
      tasks = [...tasks, { id, name: taskName, completed: false }];
      taskName = "";
    }
  }
  function removeTask(id: number) {
    tasks = tasks.filter((task: { id: number; }) => task.id !== id);
  }
  function toggleTask(id: number) {
    tasks = tasks.map((task: { id: number; completed: any; }) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
  }
</script>

<h1>Task Manager</h1>
<form on:submit|preventDefault={addTask}>
  <input type="text" bind:value={taskName} />
  <button type="submit">Add Task</button>
</form>
<ul>
  {#each tasks as task}
    <li on:click={() => toggleTask(task.id)} class:completed={task.completed}>
      {task.name}
      <button on:click|stopPropagation={() => removeTask(task.id)}>X</button>
    </li>
  {/each}
</ul>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<style>
  .completed {
    text-decoration: line-through;
  }
</style>
