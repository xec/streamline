<script>
  import Icon from "svelte-awesome";
  import {
    faHome,
    faInfoCircle,
    faSortAmountUp,
    faBorderAll,
    faSnowflake,
    faEyeDropper,
    faCheck
  } from "@fortawesome/free-solid-svg-icons";

  import AppBar from "../../svelte-from-scratch/src/AppBar.svelte";
  import Navigation from "../../svelte-from-scratch/src/Navigation.svelte";
  import Dropdown from "../../svelte-from-scratch/src/Dropdown.svelte";
  import DarkmodeToggle from "../../svelte-from-scratch/src/DarkmodeToggle.svelte";

  export let segment;
</script>

<AppBar>
  <DarkmodeToggle />
  <a href="snowflakes" class="bf-button" style="padding: 0.7rem">
    <Icon data={faSnowflake} />
  </a>
  <Dropdown trigger="Profile">
    <a href="about" class:active={segment === 'about'}>About</a>
    <a href="counter" class:active={segment === 'counter'}>Counter</a>
  </Dropdown>
</AppBar>

<Navigation>
  <a href="/" class:bf-active={!segment}>
    <Icon data={faHome} />
    Home
  </a>
  <a href="about" class:bf-active={segment === 'about'}>
    <Icon data={faInfoCircle} />
    About
  </a>
  <hr />
  <a href="counter" class:bf-active={segment === 'counter'}>
    <Icon data={faSortAmountUp} />
    Counter
  </a>
  <a href="fiveinarow" class:bf-active={segment === 'fiveinarow'}>
    <Icon data={faBorderAll} />
    Five-in-a-row
  </a>
  <a href="snowflakes" class:bf-active={segment === 'snowflakes'}>
    <Icon data={faSnowflake} />
    Snowflakes
  </a>
  <a href="colors" class:bf-active={segment === 'colors'}>
    <Icon data={faEyeDropper} />
    Colors
  </a>
  <a href="todo" class:bf-active={segment === 'todo'}>
    <Icon data={faCheck} />
    Todo
  </a>
</Navigation>
