<template>
  <div class="app">
    <h1>TODOS</h1>
    <div class="input-container">
      <input v-model="newActivity" placeholder="Tambah kegiatan baru">
      <button @click="addActivity">Tambah</button>
    </div>
    <div>
      <button @click="showIncomplete = false">Tampilkan semua</button>
      <button @click="showIncomplete = true">Filter</button>
    </div>
    <ul>
      <li v-for="(activity, index) in filteredActivities" :key="index">
        <input type="checkbox" v-model="activity.completed">
        <span v-if="!activity.editable" :class="{ 'completed': activity.completed }">{{ activity.name }}</span>
        <input v-if="activity.editable" v-model="activity.name" @keyup.enter="toggleEdit(index)" />
        <button @click="toggleEdit(index)">{{ activity.editable ? 'Simpan' : 'Edit' }}</button>
        <button @click="cancelActivity(index)">Batalkan</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newActivity: '',
      activities: [],
      showIncomplete: false
    };
  },
  methods: {
    addActivity() {
      if (this.newActivity.trim() !== '') {
        this.activities.push({ name: this.newActivity, completed: false, editable: false });
        this.newActivity = '';
      }
    },
    toggleEdit(index) {
      this.activities[index].editable = !this.activities[index].editable;
    },
    cancelActivity(index) {
      this.activities.splice(index, 1);
    }
  },
  computed: {
    filteredActivities() {
      if (this.showIncomplete) {
        return this.activities.filter(activity => !activity.completed);
      } else {
        return this.activities;
      }
    }
  }
};
</script>

<style scoped>
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  color: #333;
}

.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #1e88e5;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1565c0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}

.completed {
  text-decoration: line-through;
  color: #757575;
}
</style>
