<template>
<div>
  <draggable tag="div" v-model="Timers" v-bind="dragOptions" :move="onMove">
    <transition-group name="no" class="list-group" tag="ul">
      <CardTimer v-for="timer in Timers" :key="timer.id" :timer="timer" />
    </transition-group>
  </draggable>
</div>
</template>

<script src="./Timers.vue.js"></script>

<style src="./Timers.vue.css" scoped></style>
