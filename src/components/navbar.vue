<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/todos">Todos</router-link></li>
        <li><router-link to="/post">Post</router-link></li>
        <li><router-link to="/albums">Albums</router-link></li>
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
  color: #fff;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

li {
  margin: 0 20px;
}

a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

a:hover {
  color: #ff6363;
}
</style>
