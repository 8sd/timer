import Cookies from 'js-cookie'

export default {
  name: 'StoreOrReload',
  components: {
  },
  data() {
    return {
      profiles: {},
      profileName: '',
      renderKey: 0
    }
  },
  props: {},
  methods: {
    store: function () {
      if (this.$store.state.timers && this.$store.state.timers.length >= 0){
        this.profiles[this.profileName] = this.$store.state.timers;
        Cookies.set('profiles', this.profiles);
      }
      this.profileName = '';
    },
    restore: function () {
      this.$store.state.timers = this.profiles[this.profileName];
    },
    remove: function () {
      delete this.profiles[this.profileName];
      Cookies.set('profiles', this.profiles);
      this.renderKey += 1;
    }
  },
  computed: {
    profileNames () {
      return Object.keys(this.profiles);
    }
  },
  created: function (){
    let profiles = Cookies.getJSON('profiles');
    this.profiles = profiles === undefined ? {} : profiles;
    console.log('type: ', typeof this.profiles)
  }
}