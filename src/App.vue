<template>
  <div id="app">
    <Navbar />
    <TaskList />
    <post />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import TaskList from './components/TaskList.vue';
import post from './components/post.vue';

export default {
  components: {
    Navbar,
    TaskList,
    post
  }
}

</script>