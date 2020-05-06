<template>
<div style="text-align: center">
  <img src="/timer.svg" @click="req"/>
  <h1>Timer</h1>
  <div class="animated bounceOutLeft delay-3s" id="notificationHint">
    <v-label>Press the icon to request the permissions for the notifications</v-label> 
  </div>
</div>
</template>

<script src="./Title.vue.js"></script>

<style src="./Title.vue.css" scoped></style>
