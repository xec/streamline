<script lang="ts">
  let color = $state('#bada55')
</script>

<style>
  .editBox {
    font-size: 3rem;
    padding: 10rem 1rem;
    text-align: center;
    outline: none;
    background-color: var(--bfc-base-0);
  }
</style>

<div contenteditable class="editBox" style="color: {color}">Edit me</div>
<section>
  <label>Text color: <input type="color" bind:value={color}> {color}</label> 
</section>
