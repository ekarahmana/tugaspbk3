<template>
  <div>
    <h2>Post</h2>
    <label for="userSelect">Select User:</label>
    <select v-model="selectedUser" @change="getUserPosts">
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
    </select>
    <div v-if="userPosts.length > 0">
      <div v-for="post in userPosts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
    <div v-else>
      <p>No posts available.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const selectedUser = ref(null);
const users = ref([]);
const userPosts = ref([]);

const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    users.value = data;
    if (data.length > 0) {
      selectedUser.value = data[0].id; // Set default selected user
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const getUserPosts = async () => {
  try {
    if (selectedUser.value !== null) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.value}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      userPosts.value = data;
    }
  } catch (error) {
    console.error('Error fetching user posts:', error);
  }
};

onMounted(() => {
  getUsers();
});

watch(selectedUser, (newValue, oldValue) => {
  if (newValue !== null) {
    getUserPosts();
  }
});
</script>
