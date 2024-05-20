<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/todos">Todos</router-link></li>
        <li><router-link to="/post">Post</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style scoped>
nav {
  background-color: #2b0202;
  color: #c41e1e;
  padding: 10px 0;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  color: #9f1616;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
