import Label from '@/components/Label/Label.vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { numeric, required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('numeric', {
  ...numeric,
  message: 'This value has to be a positive number'
});

export default {
  name: 'AddTimer',
  components: {
    Label,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      minutes: 0,
      seconds: 0,
      modal: false,
      label: ''
    }
  },
  props: {},
  methods: {
    submit: function () {
      if(this.validInputs) {
        this.$refs.observer.validate()
        this.$store.state.timers.push({label: this.label, duration: this.duration, id: (new Date()).getTime()});
        this.label = '';
        this.minutes = 0;
        this.seconds = 0;
        this.$refs.observer.reset();
        this.$refs.label_timer.focus(); 
      }
    },
    toggleSettings: function () {
      this.$store.state.settingsVisible = !this.$store.state.settingsVisible; 
    }
  },
  computed: {
    validInputs () {
      return this.label != '' && this.duration != 0 && this.minutes >= 0 && this.seconds == Math.floor(this.seconds)
    },
    duration () {
      return Number(this.minutes) * 60 + Number(this.seconds);
    }
  },
  watch: {
    seconds (v,o) {
      if (v == -1 && o == 0) {
        if (this.minutes === 0) {
          this.$nextTick(function() {
            this.seconds = 0;
          });
        } else {
          this.minutes -= 1;
          this.seconds = 59;
        }
      } else if (v < 0)
        this.seconds = Math.abs(v);

      if (v == 60 && o == 59) {
        this.minutes += 1;
        this.seconds = 0;
      } else if (v > 59){
        this.minutes = Math.floor(v/60);
        this.seconds = v%60;
      }
    },
    minutes (v) {
      if (v < 0)
        this.minutes = Math.abs(v);
      if (Math.floor(v) != v) {
        this.seconds = Math.round((v - Math.floor(v)) * 60)
        this.minutes = Math.floor(v);
      }
    }
  }
}