export default {
  name: 'Duration',
  components: {
  },
  data() {
    return {
    }
  },
  props: {
    passed: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0 
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    Passed () {
      return this.passed === null ? '--:--' : String(Math.floor(this.passed / 60)).padStart(2,0) + ':' + String(this.passed % 60).padStart(2,0);
    },
    Total () {
      return  this.total === null ? '--:--' : String(Math.floor(this.total / 60)).padStart(2,0) + ':' + String(this.total % 60).padStart(2,0);      
    },
    content () {
      return this.Passed + '/' + this.Total;
    }
  },
  watch: {
    content: function () {
      console.debug('emit content: ', this.content);
      this.$emit('content', this.content);
    }
  }
}