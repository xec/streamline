<script>
  import Todo from "@xec/svelte-todo";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
</script>

<style>
  .todoWrapper {
    --todo-input-text: var(--bfc-base-200);
    --todo-input-bg: var(--bfc-base-0);
    --todo-input-border: none;
    --todo-item-text: #333;
    --todo-item-bg: hsl(240, 8%, 93%);
    --todo-item-bg-hover: white;
    --todo-item-border: 1px solid hsl(240, 8%, 70%);
    --todo-item-done-bg: hsl(240, 8%, 98%);
    --todo-item-done-border: 1px solid hsl(240, 8%, 90%);
    --todo-font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    --todo-remove-bg: black;
    --todo-remove-text: white;
  }
</style>

<TransitionWrapper>
  <div class="todoWrapper">
    <Todo />
  </div>
</TransitionWrapper>
