var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'This VueJS instance',
    showParagraph: false,
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('This VueJS Instance (Updated)');
    },
    updateTitle: function(t) {  // t = ('this vueJS instance (updated)')
      this.title = t;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

setTimeout(function(){
  vm1.title = 'Changed by Timer!'
  vm1.show()
},3000)

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'This is Second Instance',
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed!';
    }
  }
})
