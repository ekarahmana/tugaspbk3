<template>
  <div>
    <h1>Photos</h1>
    <div v-if="photos.length > 0" class="photos-container">
      <ul>
        <li v-for="photo in photos" :key="photo.id">
          <router-link :to="'/photos/' + photo.id">
            <img :src="photo.thumbnailUrl" :alt="photo.title" />
          </router-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No photos available.</p>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAlbumStore } from '../store';

const route = useRoute();
const albumStore = useAlbumStore();

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      albumStore.fetchPhotos(newId);
    }
  },
  { immediate: true }
);

const photos = computed(() => albumStore.photos);
</script>

<style scoped>
h1 {
  text-align: center;
  color: #333;
}

.photos-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

li {
  margin: 10px;
}

img {
  border-radius: 10px;
  transition: transform 0.3s;
}

img:hover {
  transform: scale(1.1);
}

p {
  text-align: center;
  color: #757575;
}
</style>
