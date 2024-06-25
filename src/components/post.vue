<template>
  <div>
    <h1>Post</h1>
    <label for="userSelect">Select User:</label>
    <select v-model="selectedUser" @change="getUserPosts">
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
    </select>
    <div v-if="userPosts.length > 0">
      <div v-for="post in userPosts" :key="post.id" class="post">
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

watch(selectedUser, (newValue) => {
  if (newValue !== null) {
    getUserPosts();
  }
});
</script>

<style scoped>
h1 {
  text-align: center;
  color: #333;
}

label {
  display: block;
  text-align: center;
  margin-bottom: 10px;
}

select {
  display: block;
  margin: 0 auto 20px auto;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.post {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #1e88e5;
}

p {
  color: #757575;
}

p {
  text-align: center;
  color: #757575;
}
</style>
