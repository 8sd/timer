export default {
  name: 'Title',
  computed: {
    requestedPermissions () {
      return this.$store.state.requestedPermissions;
    }
  },
  methods: {
    req: function () {
      console.log("requestion")
      if(!this.requestedPermissions)
        this.$store.state.requestPermissions();
    }
  },
  mounted () {
    this.$nextTick().then(() => {
        document.getElementById('notificationHint').classList.add('shrinked');
      document.getElementById('notificationHint').addEventListener('animationend', () => {

        //document.getElementById('notificationHint').classList.add('invisible');
      });
    });
  }
};
