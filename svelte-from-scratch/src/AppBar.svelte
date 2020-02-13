<script>
  import Dropdown from "./DropDown.svelte";
  import Icon from "svelte-awesome";
  import { faGlobe } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="bf-appbar">
  <slot name="logo">
    <a href="/" class="logo">Streamline</a>
  </slot>
  <nav>
    <slot />
  </nav>
</div>
