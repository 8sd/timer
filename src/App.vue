<template>
  <v-app>
    <Title />
    <v-card width="80%" max-width="1200px" class="mx-auto" style="z-index: 1;">
      <AddTimer />
      <v-divider />
      <Settings />
      <v-divider />
      <CurrentTimer />
      <v-divider />
      <Timers />
    </v-card>
    
    <div class="infotooltip" style="z-index: 0;">
      <v-icon color="grey" dark @click="showNotifyIndicator = !showNotifyIndicator">fas fa-info-circle</v-icon>
      <NotifyIndicator v-if="showNotifyIndicator"/>
      <div v-else class="legal">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-label color="primary" v-on="on">Legal Notice</v-label>
          </template>
          <span>Diese Seite ist noch leer.</span>
        </v-tooltip>
      </div>
    </div>
    <div class="github">
      <a href="https://github.com/8sd/timer">
        <v-icon color="grey" dark style="z-index: 10; margin: 8px">fab fa-github</v-icon>
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

  },
  mounted: function () {
    const url = new URL(window.location.href)
    if(url.searchParams.get('timers')) {
      console.log (JSON.parse(url.searchParams.get('timers')));
      this.$store.state.timers = JSON.parse(url.searchParams.get('timers'));
    }
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