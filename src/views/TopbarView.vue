<template>
  <header class="navbar">
    <a href="/" class="home-link router-link-active">
      <img src="@/assets/logo.svg" alt="Vue.js" class="logo">
      <span class="site-name can-hide">Vue 3 Github</span>
    </a>

    <div class="links" style="max-width: 1314px;">
      <nav class="nav-links can-hide">
        <a :href="GITHUB_URL" target="_blank" rel="noopener noreferrer" class="repo-link">
          {{GITHUB_URL.split('//')[1]}}
        </a>
      </nav>
    </div>
  </header>
</template>

<style>
.navbar {
  padding: .7rem 1.5rem;
  line-height: 2.2rem;

  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 3.6rem;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
}

.navbar .logo {
  height: 2.2rem;
  min-width: 2.2rem;
  margin-right: .5rem;
  vertical-align: top;
}

.navbar .links {
  padding-left: 1.5rem;
  box-sizing: border-box;
  background-color: #fff;
  white-space: nowrap;
  font-size: .9rem;
  position: absolute;
  right: 1.5rem;
  top: .7rem;
  display: flex;
}
</style>
