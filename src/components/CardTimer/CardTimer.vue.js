import Label from '@/components/Label/Label.vue';
import Duration from '@/components/Duration/Duration.vue';

export default {
  name: 'CardTimer',
  components: {
    Duration,
    Label,
  },
  props: {
    timer: {
      type: Object,
      required: true
    },
  },
  methods: {
    remove: function () {
      let timer = this.timer;
      this.$store.state.timers = this.$store.state.timers.filter(function (v){
        return timer !== v;
      });
    }
  },
  mounted: function () {
    this.$nextTick().then(() => {
      let cards = document.getElementsByClassName('cardTimer');
      for(var i = 0; i < cards.length; i++){
        cards[i].classList.replace('invisible', 'visible');
      }
    });
  }
}