<template>
<v-label>
  <v-icon v-if="icon !== ''">{{icon}}</v-icon> 
  <span v-if="passed === null">
    <span class="total">{{Total}}</span>
  </span>
  <span v-else>
  <span class="passed">{{Passed}}</span> / <span class="total">{{Total}}</span>
  </span>
</v-label>
</template>

<script src="./Duration.vue.js"></script>

<style src="./Duration.vue.css" scoped></style>
