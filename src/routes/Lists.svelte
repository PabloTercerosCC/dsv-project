<script>
  import List from './List.svelte';

  let taskList = [];

  function addTask() {
    const nameInput = event.target.parentNode.querySelector('.text-nameList');
    const name = nameInput.value.trim();
    const addNewElement = document.querySelector('.addNewList');

    if (name) {
      const buttonNewList = document.querySelector('.button-NewList');
      const buttonSortFil = document.querySelector('.button-Filtrar-Ordenar');
      buttonNewList?.removeAttribute('hidden');
      buttonSortFil?.removeAttribute('hidden');

      addNewElement.setAttribute('hidden', true);
      taskList = [...taskList, { name, id: Date.now() }];
      nameInput.value = '';
    }
  }
</script>

<div class="lists" id="listsTask">
  <div id="addNewList" class="addNewList">
      <input class="text-nameList" type="text" name="name" placeholder="Name List....">
      <button class="button-addList" type="button" on:click={addTask}>Add List</button>
  </div>

  <div id="tasklist" class="taskList">
        {#each taskList as task}
          <List key={task.id} name={task.name} />
        {/each}
  </div>
</div>

<style>
.lists{
  background-color: rgba(232, 241, 181, 0.5);
  margin: 56px;
  padding: 340px;
  border-radius: 42px;
  position: relative;
}

.addNewList {
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  width: 80%;
}

.text-nameList {
  display: inline-block;
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translateX(-70%);
  background-color: #fff;
  padding: 10px;
  width: 70%;
  border: 0.8px solid #949494;
}

.button-addList {
  display: flex;
  float: right;
  background-color: rgb(177, 241, 185);
  color: #0e0e0e;
  padding: 10px 40px;
  font-size: 16px;
  border: none;
  border-radius: 59px;
  margin-top:-20px;
}

.tasklist {
  position: relative;
  left: 0;
  top: 0; 
}
</style>