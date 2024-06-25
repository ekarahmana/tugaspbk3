<template>
  <div>
    <h1>Albums</h1>
    <div v-if="albums.length > 0">
      <ul>
        <li v-for="album in albums" :key="album.id">
          <router-link :to="'/albums/' + album.id">{{ album.title }}</router-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No albums available.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useAlbumStore } from '../store';

const albumStore = useAlbumStore();

onMounted(() => {
  albumStore.fetchAlbums();
});

const albums = computed(() => albumStore.albums);
</script>

<style scoped>
h1 {
  text-align: center;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

a {
  color: #1e88e5;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

a:hover {
  color: #1565c0;
}

p {
  text-align: center;
  color: #757575;
}
</style>
