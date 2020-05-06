<template>
<div style="margin: 8px">
  <div v-if="timers.length === 0" style="display: flex;">
    <v-select solo :items="profileNames" v-model="profileName" label="Profile" :disabled="profiles == null" :key="renderKey"></v-select>
    <v-btn @click="restore">Restore</v-btn>
    <v-btn @click="remove">Delete</v-btn>
  </div>
  <div v-else style="display: flex;">
    <v-text-field v-model="profileName" label="Profile"></v-text-field>
    <v-btn @click="store">Store Profile</v-btn>
  </div>
</div>
</template>

<script src="./StoreOrReload.vue.js"></script>

<style src="./StoreOrReload.vue.css" scoped></style>
