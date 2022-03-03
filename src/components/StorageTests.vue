<script setup lang="ts">
import { ref, reactive } from 'vue';

import { useLocalStore } from '../stores/local';

import { createStorage, snapshot, prefixStorage } from 'unstorage';
import localStorageDriver from 'unstorage/drivers/localstorage';

const storage = createStorage();
// const storage = createStorage({
//   driver: localStorageDriver({ base: 'local' }),
// });
await storage.mount('/app', localStorageDriver({ base: 'local' }));
console.log(storage);

await storage.setItem('w&m:web-perlen', 'Episode 15');
const isAvialable = ref(await storage.hasItem('w&m:web-perlen'));

await storage.watch((event, key) => {
  console.log('watch:', event, key);
});

const value = ref(await storage.getItem('w&m:web-perlen'));

//await storage.removeItem('w&m:web-perlen');

// await storage.clear('/output');

await storage.setMeta('w&m:web-perlen', { article: true });

const metaData = ref(await storage.getMeta('w&m:web-perlen'));

await storage.removeMeta('w&m:web-perlen');
await storage.removeMeta('w&m:web-perlen$');

await storage.setItem('/app:test', 'works');
await storage.setItem('/na:test', 'works');

// await storage.unmount('/app');

const keys = reactive(await storage.getKeys());

const snapshotData = reactive(await snapshot(storage)); // , '/app'));
console.log(snapshotData);

const secondStorage = createStorage();
const imageStorage = prefixStorage(secondStorage, 'images');

await imageStorage.setItem('logo', 'logo.png');

const logo = ref(await imageStorage.getItem('logo'));

const localStore = useLocalStore();

localStore.setName('Fabian');

console.log('pinia store', localStore);
</script>

<template>
  <h2>Storage Tests (unstorage)</h2>
  <div v-if="isAvialable">
    <p>Daten sind vorhanden!</p>
    <p>{{ value }}</p>
  </div>
  <div>
    {{ keys }}
  </div>
  <div>
    {{ metaData }}
  </div>
  <div>
    {{ snapshotData }}
  </div>
  <div>
    {{ logo }}
  </div>
</template>
