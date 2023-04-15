<script>
    function handleNewListClick() {
        const addNewElement = document.querySelector('.addNewList');
        addNewElement?.removeAttribute('hidden');
    }
</script>

<div class="headToDoList">
    <h1 class="title-ToDoList">To-do List</h1>
    <button class="button-NewList" hidden on:click={handleNewListClick}>New List</button>
        <button class="button-Filtrar-Ordenar" hidden>Filtrar/Ordenar</button>
</div>

<style>
    .headToDoList {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(218, 230, 141, 0.5);
        margin: 20px;
        padding: 1px;
        border-radius: 54px;
    }

    .button-Filtrar-Ordenar {
        background-color: rgb(161, 230, 170);
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 59px;
        margin-right: 20px;
    }

    .button-NewList {
        background-color: rgb(161, 230, 170);
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 59px;
        margin-left: 10px;
        order: -1;
    }

    .title-ToDoList {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
        color: rgb(47, 47, 47);
        flex-grow: 1;
    }
</style>