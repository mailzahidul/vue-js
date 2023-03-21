// new Vue({
//     el: "#app",
//     data: {
        // title: "Zahid",
        // msg: true,
        // message: "This is last message",
        // cars:["Toyota","Nissan","Honda"],       // Array
        // robot:{                                 // Object
        //     name:"Frankey Zaman",
        //     age:23,
        //     position: "sales man"
        // },
        // greeting:  ()=>{                        // Method
        //     return "Hello Brother"
        // },
        // image:[
        //     "http://127.0.0.1:8000/static/img/logo.png",
        //     "Hishab Book Web"
        // ],
        // myHtml:"<strong>My Strong Text</strong>",

        // userName:"babazahidul",
        // userAge:45,



//         lists:["Golap","Togor", "Joba", "Shiuli"],
//         objs:{
//                 Name:"Zahidul",
//                 F_name:"A. Latif",
//                 village:"shimul pur"
//         }

//     },
//     methods:{
//         green_view: function(){                 // Previous
//             return this.greeting()
//         },
//         red_view(){                             // ES6
//             return this.greeting()
//         },
//         match(){
//             return this.userAge <= 50 ? true : false;
//         }
//     }
// });


new Vue({
  el: '#app',
  data () {
    return {
      info: null,
      loading: true,
      errored: false,
      name: "Zahid"
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
  methods:{
      changeName(){
    return this.name = "Rafi"
    },
    formHandle(){
      console.log("Form Submitted Successfully...")
    }
  }


})