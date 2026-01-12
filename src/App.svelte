<script>
  import { onMount } from 'svelte';
  import ModeToggle from './lib/ModeToggle.svelte';
  import Terminal from './lib/Terminal.svelte';
  import NonDevView from './lib/NonDevView.svelte';
  
  let isDev = true;
  
  onMount(() => {
    const savedMode = localStorage.getItem('siteMode');
    if (savedMode !== null) {
      isDev = savedMode === 'dev';
    }
  });
  
  function handleModeChange(event) {
    isDev = event.detail.isDev;
    localStorage.setItem('siteMode', isDev ? 'dev' : 'simple');
  }
</script>

<svelte:head>
  <title>Divy Singhvi | Full-Stack Developer & Cloud Engineer</title>
  <meta name="description" content="Divy Singhvi - Full-stack developer specializing in Kubernetes, Docker, Django, React, and Flutter. Building scalable cloud-native solutions.">
  <meta name="keywords" content="Divy Singhvi, Full-Stack Developer, Kubernetes, Docker, Django, React, Flutter, Cloud Engineer">
  <meta name="author" content="Divy Singhvi">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Divy Singhvi | Full-Stack Developer">
  <meta property="og:description" content="Full-stack developer specializing in cloud-native solutions, Kubernetes, and modern web technologies.">
  <meta property="og:url" content="https://divysinghvi.com">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Divy Singhvi | Full-Stack Developer">
  <meta name="twitter:description" content="Full-stack developer specializing in cloud-native solutions.">
  <meta name="twitter:creator" content="@sdiv172632">
</svelte:head>

<ModeToggle {isDev} on:change={handleModeChange} />

<main>
  {#if isDev}
    <Terminal />
  {:else}
    <NonDevView />
  {/if}
</main>

<style>
  :global(body) {
    background-color: #1e1e1e;
    margin: 0;
    padding: 0;
  }
  
  main {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  
  @media (max-width: 600px) {
    main {
      padding: 1rem;
      align-items: flex-start;
    }
  }
</style>
