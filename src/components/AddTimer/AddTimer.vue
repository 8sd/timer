<template>
<div style="width: min(30em, 80%);margin-left:auto;margin-right:auto;">
  <v-form onsubmit="return false">
  <ValidationObserver ref="observer">
    <div class="in">
      <validation-provider rules="required" v-slot="{ errors }">
        <v-text-field v-model="label" label="Label" prepend-icon="fa-tag" required :error-messages="errors" />
      </validation-provider>
    </div>

    <div class="in" style="display: flex">
      <v-label style="display:flex;align-items:flex-end;">
        <v-icon style="margin: 4px 9px 4px 0">far fa-clock</v-icon>
      </v-label>

      <validation-provider rules="required|numeric" v-slot="{ errors }">
        <v-text-field v-model="minutes" label="Minutes" type="number" min="0" required
          :error-messages="errors" />
      </validation-provider>
      <span style="margin: .5em"></span>

      <validation-provider rules="required|numeric" v-slot="{ errors }">
        <v-text-field v-model="seconds" label="Seconds" type="number" min="0"  required
          :error-messages="errors"/>
      </validation-provider>
      <span style="display:flex;align-items:flex-end;margin-bottom: 14px">
        <v-btn :disabled="!validInputs" @click="submit" type="submit" icon>
          <i class="far fa-plus-square"></i>
        </v-btn>
        <v-btn @click="toggleSettings" icon>
          <i class="fas fa-sliders-h"></i>
        </v-btn>
      </span>
    </div>
  </ValidationObserver>
  </v-form>
</div>
</template>

<script src="./AddTimer.vue.js"></script>

<style src="./AddTimer.vue.css" scoped></style>