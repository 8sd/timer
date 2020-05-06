<template>
  <v-app>
    <Title />
    <v-card width="80%" class="mx-auto">
      <AddTimer />
      <v-divider />
      <Settings />
      <v-divider />
      <CurrentTimer />
      <v-divider />
      <Timers />
    </v-card>
    
    <div class="infotooltip">
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-icon color="grey" dark v-on="on" @click="showNotifyIndicator = !showNotifyIndicator" style="z-index: 10">fas fa-info-circle</v-icon>
        </template>
        <span>Timer-Icon made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></span>
      </v-tooltip>
      <NotifyIndicator v-if="showNotifyIndicator"/>
      <div v-else class="legal">
        <a href="/legal.htm">
          <v-label color="primary">Legal Notice</v-label>
        </a> 
      </div>
    </div>
    <div class="github">
      <a href="https://github.com/8sd/timer">
        <v-icon color="grey" dark style="z-index: 10">fab fa-github</v-icon>
      </a>
    </div>
  </v-app>
</template>

<script>
import Title from './components/Title/Title.vue';
import AddTimer from './components/AddTimer/AddTimer.vue';
import CurrentTimer from './components/CurrentTimer/CurrentTimer.vue';
import Timers from './components/Timers/Timers.vue';
import NotifyIndicator from './components/NotifyIndicator/NotifyIndicator.vue';
import Settings from './components/Settings/Settings.vue';

export default {
  name: 'App',
  components: {
    AddTimer,
    CurrentTimer,
    NotifyIndicator,
    Settings,
    Timers,
    Title,
  },
  data () {
    return {
      showNotifyIndicator: false
    }
  },
  methods: {

  }
};
</script>

<style scoped>
.infotooltip {
  position: absolute;
  bottom: .5em;
  left: .5em;
}
.github {
  position: absolute;
  bottom: .5em;
  right: .5em;
}
.legal {
  position: absolute;
  bottom: .5em;
  width: 100vw; 
  text-align: center;
}
</style>
<style>
button {
  margin: 8px;
}

.invisible {
  max-height: 0px;
  overflow-y: hidden;
}
</style>