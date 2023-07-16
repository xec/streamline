<script>
	import Icon from 'svelte-awesome';
	import {
		faHome,
		faInfoCircle,
		faSortAmountUp,
		faBorderAll,
		// faSnowflake,
		faEyeDropper,
		faCheck,
		faCaretLeft,
		faDiceD20
	} from '@fortawesome/free-solid-svg-icons';

	import '@xec/snowflakes/package/snowflakes.css';
	import '../css/global.css';
	import '../css/theme.css';
	import '../css/components.css';
	import NavLink from '../components/NavLink.svelte';

	function toggleCollapsed() {
		document.body.classList.toggle('bf-navigation-collapsed');
	}
</script>

<div class="bf-layout">
	<div class="bf-appbar">
		<a href="/" class="logo">Streamline</a>
		<!-- <nav>
			<a href="snowflakes" class="bf-button" style="padding: 0.7rem">
				<Icon data={faSnowflake} />
			</a>
		</nav> -->
	</div>

	<div class="bf-navigation">
		<NavLink href="/">
			<Icon data={faHome} />
			Home
		</NavLink>
		<NavLink href="about">
			<Icon data={faInfoCircle} />
			About
		</NavLink>
		<hr />
		<NavLink href="counter">
			<Icon data={faSortAmountUp} />
			Counter
		</NavLink>
		<NavLink href="fiveinarow">
			<Icon data={faBorderAll} />
			Five-in-a-row
		</NavLink>
		<!-- <a href="snowflakes">
			<Icon data={faSnowflake} />
			Snowflakes
		</a> -->
		<NavLink href="colors">
			<Icon data={faEyeDropper} />
			Colors
		</NavLink>
		<NavLink href="todo">
			<Icon data={faCheck} />
			Todo
		</NavLink>
		<NavLink href="d4roll">
			<Icon data={faDiceD20} />
			D4 roll
		</NavLink>
		<button on:click={toggleCollapsed} class="collapse-button">
			<Icon data={faCaretLeft} />
			Collapse
		</button>
	</div>

	<main>
		<slot />
	</main>
</div>

<style>
	:root {
		--collapse-button-height: 54px;
	}
	.bf-navigation {
		padding-bottom: var(--collapse-button-height);
	}
	.collapse-button {
		text-align: unset;
		font: unset;
		border: none;
		height: var(--collapse-button-height);
		width: var(--bf-navigation-width);
		cursor: pointer;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 2px solid var(--bfc-base);
		overflow: hidden;
		transition: width 0.2s ease;
	}
	.collapse-button:not(:hover) {
		background-color: var(--bfc-base-110);
	}
	.collapse-button :global(.fa-icon) {
		transform: rotate(0deg);
		transition: transform 0.5s ease;
	}
	:global(.bf-navigation-collapsed) .collapse-button {
		width: var(--bf-navigation-width-collapsed);
	}
	:global(.bf-navigation-collapsed) .collapse-button :global(.fa-icon) {
		transform: rotate(180deg);
	}
</style>
