<template>
<div id="NotifyIndicator" class="invisible">
  <span v-for="permission in Object.keys(permissions)" :key="permission" class="spacer">
    <v-icon>{{permissions[permission] ? 'far fa-check-square' : 'far fa-square'}}</v-icon>
    <span class="spacer"></span>
    <v-label>{{permission}}</v-label>
  </span>
</div>
</template>

<script src="./NotifyIndicator.vue.js"></script>

<style src="./NotifyIndicator.vue.css" scoped></style>
