<template>
  <div>
    <h2>Postingan</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <select v-model="selectedUser">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
      <div v-if="selectedUser !== null">
        <h3 v-for="post in filteredPosts" :key="post.id">{{ post.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      users: [],
      posts: [],
      selectedUser: null
    };
  },
  async created() {
    this.loading = true;
    // Fetch data users
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    this.users = await usersResponse.json();

    // Fetch data postingan
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    this.posts = await postsResponse.json();

    this.loading = false;
  },
  computed: {
    filteredPosts() {
      if (this.selectedUser === null) return [];
      return this.posts.filter(post => post.userId === this.selectedUser);
    }
  }
};
</script>
