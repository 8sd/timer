<template>
  <div>
    <div class="controlls">
      <div style="margin-left:auto;margin-right:auto;display:table;">
        <Label :text="Label" icon="fas fa-tag" style="min-width: 10em;display: inline-block;" />
        <Duration :passed="passedDisplayTime" :total="duration === null ? null : duration / 1000"
          @content="timeProgressString = $event" />
        <v-btn icon :disabled="state === 'play'"
          :style="label == null && timers.length === 0 ? 'visibility: hidden;' : ''" @click="play"><i
            class="fas fa-play"></i></v-btn>
        <v-btn icon :disabled="state === 'pause'" :style="label == null ? 'visibility: hidden;' : ''" @click="pause"><i
            class="fas fa-pause"></i></v-btn>
        <v-btn icon :disabled="state === 'stop'" :style="label == null ? 'visibility: hidden;' : ''" @click="stop"><i
            class="fas fa-stop"></i></v-btn>
        <v-btn icon :style="label == null ? 'visibility: hidden;' : ''" @click="next"><i class="fas fa-forward"></i>
        </v-btn>
        <v-btn icon :style="label == null ? 'visibility: hidden;' : ''" @click="addMinute"><i class="fas fa-plus"></i>
        </v-btn>
        <v-btn icon :style="label == null ? 'visibility: hidden;' : ''" @click="substractMinute"><i class="fas fa-minus"></i>
        </v-btn>
        <!--TODO total time elapsed-->
      </div>
    </div>
    <progress-bar size="tiny" :val="PassedTimeRatio" bar-transition="all 1s linear"></progress-bar>
  </div>
</template>

<script src="./CurrentTimer.vue.js"></script>

<style src="./CurrentTimer.vue.css" scoped></style>