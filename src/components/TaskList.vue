<template>
  <div class="app">
    <h1>Daftar Kegiatan</h1>
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
        return this.activities.filter(activity => activity.completed);
      } else {
        return this.activities;
      }
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
