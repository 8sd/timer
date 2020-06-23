<template>
  <div class="cardTimer invisible">
    <v-divider />
    <div>
      <div class="center">
        <Label :text="timer.label" icon="" style="min-width: 10em;display: inline-block;" />
        <Duration :passed="null" :total="timer.duration === null ? null : timer.duration"
          @content="timeProgressString = $event" />
        <v-btn icon @click="remove">
          <i class="fas fa-trash-alt"></i>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script src="./CardTimer.vue.js"></script>

<style src="./CardTimer.vue.css" scoped></style>