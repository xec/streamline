<script>
  import Icon from "svelte-awesome";
  import { faHome } from "@fortawesome/free-solid-svg-icons";

  import AppBar from "../../svelte-from-scratch/src/AppBar.svelte";
  import Navigation from "../../svelte-from-scratch/src/Navigation.svelte";
  import Dropdown from "../../svelte-from-scratch/src/Dropdown.svelte";

  export let segment;
</script>

<AppBar>
  <Dropdown trigger="Profile">
    <a href="about" class:active={segment === 'about'}>About</a>
    <a href="counter" class:active={segment === 'counter'}>Counter</a>
  </Dropdown>
</AppBar>
<Navigation>
  <a href="/">
    <Icon data={faHome} />
    Home
  </a>
</Navigation>
