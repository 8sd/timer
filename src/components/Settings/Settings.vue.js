import StoreOrReload from '../StoreOrReload/StoreOrReload.vue';

export default {
  name: 'Settings',
  components: {
    StoreOrReload,
  },
  data() {
    return {
      stickyNotifications: false,
      soundOn: true
    }
  },
  props: {},
  methods: {
  },
  computed: {
    settingsVisible () {
      return this.$store.state.settingsVisible;
    }
  },
  watch: {
    stickyNotifications () {
      this.$store.state.notify.setSticky(this.stickyNotifications);
    },
    soundOn () {
      this.$store.state.notify.setSound(this.soundOn);
    }
  },
  created: function (){}
}