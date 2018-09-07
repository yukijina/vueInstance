//create component which we can reuse grobally
Vue.component('hello', {
  template: '<h1>Component!</h1>'
});

var vm1 = new Vue({
  // el: '#app1', // write in $mount()
  data: {
    title: 'This VueJS instance',
    showParagraph: false,
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('This VueJS Instance (Updated)');
      //$refs is like jQuery
      this.$refs.myButton.innerText = 'Test';
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

//$mount is method. It works same if you put el:'#app' but different syntax
vm1.$mount('#app1')

vm1.$refs.heading.innerText = 'Somthing else';

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
});


var vm3 = new Vue({
  //we can create own template
  template: '<h1>Hello!</h1>',
});

// vm3.$mount('#app3')
//or we can write as follows. But the following way is not common
vm3.$mount()
document.getElementById('app3').appendChild(vm3.$el)
