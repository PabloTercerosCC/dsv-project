<script>
    export let inputValue = '';

    let editMode = 0; // Index of the currently editing label
    let editedLabel = ''; // Value of the currently editing label

    function startEditing() {
        if (editedLabel !== inputValue) {
            editedLabel = inputValue; // Set the initial value of the editing label
            editMode = 1;
            console.log(editMode);
        }
    }

    function saveEditing() {
        inputValue = editedLabel; // Update the label in the labels array
        editMode = 0; // Reset the editing index when editing is finished
        console.log(editMode);
    }
</script>

<div>
    <input class="checkbox-task" type="checkbox" name="task">
    <label class="label-task" for="task" on:click={() => startEditing()}>
        {#if editMode === 1}
          <input type="text" bind:value={editedLabel} /> <!-- Use an input element for editing -->
          <button on:click={saveEditing}>Save</button> <!-- Use a button to save changes -->
        {:else}
          {inputValue}
        {/if}
    </label>
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
