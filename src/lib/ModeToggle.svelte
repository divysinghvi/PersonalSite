<script>
  import { createEventDispatcher } from 'svelte';
  
  export let isDev = true;
  
  const dispatch = createEventDispatcher();
  
  function toggleMode() {
    isDev = !isDev;
    dispatch('change', { isDev });
  }
</script>

<div class="toggle-container">
  <div class="toggle-label">
    <span class:active={!isDev}>Simple</span>
    <button 
      class="toggle-button" 
      class:dev={isDev}
      on:click={toggleMode}
      aria-label="Toggle between dev and simple mode"
    >
      <span class="toggle-slider"></span>
    </button>
    <span class:active={isDev}>Developer</span>
  </div>
</div>

<style>
  .toggle-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: rgba(45, 45, 45, 0.95);
    padding: 12px 20px;
    border-radius: 30px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  
  .toggle-label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 13px;
    color: #a0a0a0;
  }
  
  .toggle-label span {
    transition: color 0.3s ease;
  }
  
  .toggle-label span.active {
    color: #57c754;
    font-weight: 500;
  }
  
  .toggle-button {
    position: relative;
    width: 50px;
    height: 26px;
    background: #1e1e1e;
    border: 2px solid #444;
    border-radius: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
  }
  
  .toggle-button:hover {
    border-color: #57c754;
  }
  
  .toggle-button.dev {
    background: #57c754;
    border-color: #57c754;
  }
  
  .toggle-slider {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .toggle-button.dev .toggle-slider {
    transform: translateX(24px);
  }
  
  @media (max-width: 600px) {
    .toggle-container {
      top: 10px;
      right: 10px;
      padding: 8px 15px;
    }
    
    .toggle-label {
      font-size: 11px;
      gap: 8px;
    }
    
    .toggle-button {
      width: 40px;
      height: 22px;
    }
    
    .toggle-slider {
      width: 16px;
      height: 16px;
    }
    
    .toggle-button.dev .toggle-slider {
      transform: translateX(18px);
    }
  }
</style>
