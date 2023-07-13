<script>
  import Counter from "../../svelte-from-scratch/src/Counter.svelte";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
</script>

<svelte:head>
  <title>Counter</title>
</svelte:head>

<TransitionWrapper>
  <Counter />
</TransitionWrapper>
