<script>
  import Dropdown from "./DropDown.svelte";
  import Icon from "svelte-awesome";
  import { faGlobe } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="bf-appbar">
  <a href="/" class="logo">Streamline</a>
  <nav>
    <Dropdown class="bf-appbar-item">
      <button class="bf-button" slot="trigger" let:open>
        {open ? '▾' : '▸'} Notifications
      </button>
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
