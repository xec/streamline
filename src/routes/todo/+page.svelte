<script>
	import Todo from '@xec/svelte-todo';
</script>

<div class="todoWrapper page">
	<Todo />
</div>

<style>
	.todoWrapper {
		--todo-input-text: var(--bfc-base-200);
		--todo-input-bg: var(--bfc-base-0);
		--todo-input-border: 1px solid var(--bfc-base-150);
		--todo-item-text: var(--bfc-base-200);
		--todo-item-bg: var(--bfc-base-120);
		--todo-item-bg-hover: var(--bfc-base-150);
		--todo-item-border: none;
		--todo-item-done-bg: var(--bfc-base-110);
		--todo-item-done-border: none;
		--todo-font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		--todo-remove-bg: black;
		--todo-remove-text: white;
	}
</style>
