export default {
  name: 'NotifyIndicator',
  components: {
  },
  data() {
    return {
      permissions: {}
    }
  },
  props: {},
  methods: {
  },
  created: function (){
    this.permissions = this.$store.state.requestPermissions();
  },
  mounted: function () {
    this.$nextTick().then(() => {
      document.getElementById('NotifyIndicator').classList.remove('invisible');
    });
  }
}