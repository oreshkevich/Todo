<template>
  <div class="header">
    <nav class="nav">
      <router-link to="/" class="router-link"> Todos </router-link>
      |
      <router-link to="/statistics" class="router-link">Statistics</router-link>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
body {
  height: 100%;
  justify-content: center;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.1px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #bebbbb;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.6s ease;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  padding: 0;
  font: inherit;
}
button {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}
.nav {
  text-align: center;
}
h2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin: 25px 0;
  border-bottom: 1px solid #bfbfbf;
}

h2 .mask-num {
  border-radius: 20px;
  border: 2px solid #2a2f36;
  color: #2a2f36;
  font-size: 14px;
  font-weight: 700;
  padding: 5px 10px;
}

.container {
  width: 750px;
  margin: 0 auto;
  padding: 0 15px;
}

.header {
  background-color: #837e7e;
  padding: 10px 0;
}

.form-todo .container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  padding: 10px 0;
  margin-bottom: 40px;
}

.header .container .logo {
  line-height: 50px;
  color: #ddd;
  font-size: 24px;
  cursor: pointer;
}

.form input:focus {
  border: 1px solid #12c0dd;
}

.btn {
  background-color: #12c0dd;
  border: 1px solid #12c0dd;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 15px;
  font-size: 12px;
  height: 40px;
  outline: none;
  transition: 0.2s;
}

.btn:hover {
  background-color: #0dd6f8;
  border-color: #0dd6f8;
}

.mask-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  line-height: 32px;
  margin-bottom: 10px;
  border-radius: 3px;
  background-color: #fff;
}

.mask-list.complete-list li {
  border-left-color: #999;
  opacity: 0.5;
}
.mask-list {
  padding-left: 0;
}

input[type='checkbox'] + span {
  padding-left: 10px;
}

.btn-remove {
  font-size: 12px;
  border: 2px solid #2a2f36;
  background-color: #333333;
  color: #fff;
  text-transform: uppercase;
  padding: 5px 10px;
  font-size: 12px;
  outline: none;
  transition: 0.2s;
}
.btn-edit {
  font-size: 12px;
  border: 2px solid #ac2929;
  background-color: #ac2929;
  color: #fff;
  text-transform: uppercase;
  padding: 5px 10px;
  font-size: 12px;
  outline: none;
  transition: 0.2s;
  margin-right: 10px;
}

.btn-remove:hover {
  background-color: #535151;
  border-color: #535151;
}
.router-link {
  font-size: 20px;
}

a.router-link-active,
li.router-link-active > a {
  color: red;
}
.about {
  background-color: #fff;
}
</style>
