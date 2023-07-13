<script>
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
</script>

<style>
  .centered {
    margin-top: 20vh;
    text-align: center;
  }
  .eightiesDigitalSunset {
    padding: 130px 0;
    text-align: center;
    color: black;
    display: inline-block;
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 100%;
    background: linear-gradient(
      rgba(255, 255, 0, 1) 0%,
      rgba(255, 0, 164, 1) 100%
    );
  }
  .eightiesDigitalSunset:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 400px;
    height: 400px;
    border-radius: 100%;
    box-shadow: 0 0 50px 49px rgba(255, 0, 164, 0.2);
    background-color: rgba(255, 0, 164, 0.2);
  }
  .eightiesDigitalSunset:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 402px;
    height: 402px;
    border-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      /* 9 */ rgba(0, 0, 0, 0) 7%,
      hsla(var(--bfc-base-hsl), 1) 7%,
      /* 5 */ hsla(var(--bfc-base-hsl), 1) 12%,
      rgba(0, 0, 0, 0) 12%,
      /* 8 */ rgba(0, 0, 0, 0) 20%,
      hsla(var(--bfc-base-hsl), 1) 20%,
      /* 4 */ hsla(var(--bfc-base-hsl), 1) 24%,
      rgba(0, 0, 0, 0) 24%,
      /* 7 */ rgba(0, 0, 0, 0) 31%,
      hsla(var(--bfc-base-hsl), 1) 31%,
      /* 3 */ hsla(var(--bfc-base-hsl), 1) 34%,
      rgba(0, 0, 0, 0) 34%,
      /* 6 */ rgba(0, 0, 0, 0) 40%,
      hsla(var(--bfc-base-hsl), 1) 40%,
      /* 2 */ hsla(var(--bfc-base-hsl), 1) 42%,
      rgba(0, 0, 0, 0) 42%,
      /* 5 */ rgba(0, 0, 0, 0) 47%,
      hsla(var(--bfc-base-hsl), 1) 47%,
      /* 1 */ hsla(var(--bfc-base-hsl), 1) 48%,
      rgba(0, 0, 0, 0) 48%,
      /* 4 */ rgba(0, 0, 0, 0) 52%,
      hsla(var(--bfc-base-hsl), 1) 52%,
      /* .5 */ hsla(var(--bfc-base-hsl), 1) 52.5%,
      rgba(0, 0, 0, 0) 52.5%,
      rgba(0, 0, 0, 0) 100%
    );
  }
</style>

<svelte:head>
  <title>Streamline</title>
</svelte:head>

<TransitionWrapper>
  <div class="centered">
    <div class="eightiesDigitalSunset">
      100% handcrafted pure css
      <br />
      gluten, lactose and sugar free
    </div>
  </div>
</TransitionWrapper>
