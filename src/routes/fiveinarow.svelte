<script>
  import FiveInARow from "../../svelte-from-scratch/src/FiveInARow.svelte";
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
</script>

<style>
  div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>

<svelte:head>
  <title>Five in a row</title>
</svelte:head>

<TransitionWrapper>
  <div>
    <FiveInARow boardSize={25} />
  </div>
</TransitionWrapper>
