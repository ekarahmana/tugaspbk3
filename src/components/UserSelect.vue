<template>
    <select :value="selectedUser" @change="updateSelectedUser($event.target.value)">
      <option value="">Select User</option>
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
    </select>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    users: {
      type: Array,
      required: true,
    },
    selectedUser: {
      type: [String, Number],
      required: true,
    }
  });
  
  const emits = defineEmits(['update:selectedUser']);
  
  const updateSelectedUser = (value) => {
    emits('update:selectedUser', value);
  };
  </script>
  