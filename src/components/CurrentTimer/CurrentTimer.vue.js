import ProgressBar from 'vue-simple-progress';
import Label from '@/components/Label/Label.vue';
import Duration from '@/components/Duration/Duration.vue';

export default {
  name: 'CurrentTimer',
  components: {
    Duration,
    Label,
    ProgressBar
  },
  data() {
    return {
      label: null,
      duration: null,

      msg: '',
      state: 'stop',
      preparing: true,
      notify: null,
      timeProgressString: '',

      timeout: null,
      interval: null,
      
      playingstarted: null,
      passedDisplayTime: null,
      passedTimeBeforePause: 0
    }
  },
  methods: {
    getTimer() {
      if(this.$store.state.timers.length !== 0) {
        let curr = this.$store.state.timers.shift();
        console.debug('Get new timer. Label: {curr.label}, duration: {curr.duration}');
        this.label = curr.label;
        this.duration = curr.duration * 1000;
        this.msg = 'Timer ' + curr.label + ' ';
        return true;
      }
      return false;
    },
    play() {
      console.debug("starting timer")
      this.preparing = false;
      if(this.interval !== null || this.timeout !== null || this.state === 'play')
        return;
      if(this.label === null || this.duration == 0){
        if (!this.getTimer())
          return;
      }

      this.playingstarted = (new Date).getTime();
      this.timeout = setTimeout(this.timerFinished, this.duration - this.passedTimeBeforePause);

      const vue = this;
      this.interval = setInterval(function () {
        console.debug('Update display');
        vue.passedDisplayTime = Math.floor(((new Date).getTime() - vue.playingstarted + vue.passedTimeBeforePause) / 1000);
      }, 1000);
      this.passedDisplayTime = Math.floor(((new Date).getTime() - this.playingstarted + this.passedTimeBeforePause) / 1000);

      this.state = 'play';
      console.debug("timer started")
    },
    pause() {
      this.passedTimeBeforePause += (new Date).getTime() - this.playingstarted;

      clearTimeout(this.timeout);
      this.timeout = null;
      
      clearInterval(this.interval)
      this.interval = null;
      
      this.state = 'pause';
    },
    reset() {
      let state = this.state;
      this.stop();
      if (state === 'play')
        this.play();
    },
    stop() {
      clearTimeout(this.timeout);
      this.timeout = null;
      
      clearInterval(this.interval)
      this.interval = null;

      this.playingstarted = null;
      this.passedDisplayTime = null;
      this.passedTimeBeforePause = 0;

      this.state = 'stop';
    },
    next() {
      this.timerFinished(false);
      if(this.state != 'play')
        this.getTimer();
    },
    timerFinished(notification=true) {
      if(notification){
        let msg = this.msg + 'finished!';
        try {
          this.notify(this.label, msg);
        } catch (e) {
          console.error('Could not notify');
          console.error(e);
          console.log(this.notify);
        }
      }

      this.label = null;
      this.duration = null;

      clearTimeout(this.timeout);
      this.timeout = null;
      
      clearInterval(this.interval)
      this.interval = null;

      this.playingstarted = null;
      this.passedDisplayTime = null;
      this.passedTimeBeforePause = 0;
      /*Reset everything*/

      if(this.state === 'play') {
        console.debug('starting next timer');
        this.state = 'new';
        this.play();
        if(this.label === null){
          this.state = 'stop';
          console.debug('No timer queued. Stopping…');
        }
        console.debug('label: ' + this.label)
      }
    },
    addMinute () {
      this.duration += 60000;
      this.pause();
      this.play();
    },
    substractMinute () {
      this.duration -= 60000;
      this.pause();
      this.play();
    },
  },
  computed: {
    Label () {
      let label = this.label === null ? (this.preparing ? 'No timer set!' : 'All timers finished!') : this.label;
      console.debug(label);
      return label;
    },
    State () {
      let state = '';
      switch (this.state) {
        case 'play':
          state = '▶';
          break;
        case 'pause':
          state = '⏸';
          break;
        default:
          state = '⏹';
          break;
      }
      console.debug(state);
      return state;
    },
    Title () {
      let title = null;
      if (this.state === 'play' || this.state === 'pause'){
        title = this.State + ' ' + this.Label + ': ' + this.timeProgressString;
      } else {
        title = 'Timer' + (this.preparing ? '' : ' finished');
      }
      console.debug(title);
      return title;
    },
    PassedTimeRatio () {
      let ratio = this.duration > 0 ? this.passedDisplayTime * 100000 / this.duration : (this.preparing ? 0 : 100);
      return ratio;
    },
  },
  created: function () {
    this.notify = this.$store.state.notify.notify;
  },
  watch: {
    Title (n) {
      console.info('Set title to ' + n)
      document.title = n;
    }
  }
}