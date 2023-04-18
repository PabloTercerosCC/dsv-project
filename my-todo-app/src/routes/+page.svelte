<script>
    import Todo from './Todo.svelte';
    import TodoForm from './TodoForm.svelte';
    import { todos } from './todoStore.js';
    
</script>

<main>
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">
        My Todos
    </h1>
    <TodoForm/>
    {#each $todos as todo (todo.id)}
        <Todo todo={todo}/>
    {/each}
</main>
