export default {
  name: 'Label',
  components: {
  },
  data() {
    return {
    }
  },
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
  },
  created: function (){}
}