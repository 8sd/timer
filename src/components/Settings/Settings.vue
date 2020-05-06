<template>
<div :class="'settings ' + (settingsVisible ? '' : 'in') + 'visible'">
  <v-btn @click="stickyNotifications = !stickyNotifications">
    <i v-if="stickyNotifications" class="fas fa-map-marker-alt"></i>
    <i v-else class="fas fa-map-marker"></i>
    Sticky Notifications
  </v-btn>
  <v-label> </v-label>
  <v-btn @click="soundOn = !soundOn">
    <i v-if="soundOn" class="fas fa-volume-up"></i>
    <i v-else class="fas fa-volume-mute"></i>
    Sound
  </v-btn>
  
    <StoreOrReload />
</div>
</template>

<script src="./Settings.vue.js"></script>

<style src="./Settings.vue.css" scoped></style>
