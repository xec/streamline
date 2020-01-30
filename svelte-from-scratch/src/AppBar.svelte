<script>
  import Dropdown from "./DropDown.svelte";
</script>

<div class="bf-appbar">
  <a href="/" class="logo">svelte-from-scratch</a>
  <nav>
    <Dropdown let:open>
      <button class="bf-button" slot="trigger">{open ? '▾' : '▸'} Notifications</button>
      <a href="#">Message</a>
      <a href="#">News!</a>
      <a href="#">Some nagging</a>
      <a href="#">Moar nags</a>
    </Dropdown>
    <Dropdown trigger="Profile">
      <a href="#">Settings</a>
      <a href="#">Dark mode</a>
      <a href="#">Sign out</a>
    </Dropdown>
  </nav>
</div>
