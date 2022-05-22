<template>
  <header class="navbar">
    <a href="/" class="home-link router-link-active">
      <img src="@/assets/logo.svg" alt="Vue.js" class="logo">
      <span class="site-name can-hide">Vue 3 Github</span>
    </a>

    <div class="links">
      <nav class="nav-links">
        <span class="repo-link">
          https://github.com/
        </span>
        <input name="author" class="github-author" type="text" :placeholder="author" :value="author" @blur="updateAuthor"/>
        <svg width="20" height="20" class="search-icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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

.navbar .search-icon {
  left: 4px;
  top: 6px;
}
input.github-author {
  width: 80px;
}
</style>
