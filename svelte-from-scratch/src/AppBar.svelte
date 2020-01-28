<script>
  import Dropdown from "./DropDown.svelte";
  let open = true;
</script>

<style>
  .appBar {
    /* border-bottom: 1px solid #aaa; */
    background-color: #333;
    height: 2rem;
  }
  nav {
    float: right;
  }
</style>

<div class="appBar">
  <span class="logo">[logo]</span>
  <nav>
    <Dropdown bind:open>
      <button slot="trigger">{open ? '˅' : '˃'} slot1</button>
      <p>slot2</p>
    </Dropdown>
  </nav>
</div>
