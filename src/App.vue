<template>
  <div id="app">
    <Navbar />
    <TaskList />
    <post />
    <PostList />
    <UserSelect />
    
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import TaskList from './components/TaskList.vue';
import post from './components/post.vue';
import PostList from './components/PostList.vue';
import UserSelect from './components/UserSelect.vue';

export default {
  components: {
    Navbar,
    TaskList,
    post
  }
}

</script>