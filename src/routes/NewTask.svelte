<script>
    export let inputValue = '';
</script>

<div>
    <input class="checkbox-task" type="checkbox" name="task">
    <label class="label-task" for="task">{inputValue}</label>
</div>


<style>
    .checkbox-task {
        opacity: 0.5;
        transform: scale(1.2);
        margin-bottom: 10px
    }

    .checkbox-task:checked + .label-task {
    color: var(--ds-text-subtle,#397b59);
    text-decoration: line-through;;
    }

    .label-task{
        color: rgb(25, 63, 23);
        margin-bottom: 20px
    }
</style>
