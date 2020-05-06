import draggable from "vuedraggable";
import CardTimer from '../CardTimer/CardTimer.vue';

export default {
  name: 'Timers',
  components: {
    draggable,
    CardTimer
  },
  data () {
    return {
      Timers: []
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
  },
  methods: {
    onMove: function() {
      return true;
    },
  },
  watch: {
    timers (v) {
      this.Timers = v;
    },
    Timers (v) {
      this.$store.state.timers = v;
    }
  }
}