Vue.createApp({
    data() {
      return {
        showPassword: false,
        text: "lorem ispss",
        passwordType: 'password',
        language: ['EN/NGN', 'IN/IND', 'EN/USA', 'EN/ENG'],
        activeLang: 'EN/NGN',
        showLangOption: false,
        showAside: true,
        productData: [
          {
            id: 'dstv',
            name: "DSTV Nigeria"
          },
          {
            id: 'mtn',
            name: "MTN Nigeria"
          },
          {
            id: 'gotv',
            name: "GOTV Nigeria"
          },
          {
            id: 'spec',
            name: "Spectranet"
          },
          {
            id: 'dstv',
            name: "DSTV Nigeria"
          },
          {
            id: 'mtn',
            name: "MTN Nigeria"
          },
          {
            id: 'gotv',
            name: "GOTV Nigeria"
          },
          {
            id: 'spec',
            name: "Spectranet"
          }
        ]
      };
    },
    methods: {
      selectActiveLang(lang){
        this.activeLang = lang
        this.showLangOption = false
        },
        urlChecker(value){
          return window.location.href.indexOf(value) > -1;

        },
        passwordReveal(){
            this.showPassword = !this.showPassword
            this.passwordType = this.passwordType === "password" ? "text"  : "password"
        },
        copyAddress(){
            /* Get the text field */
            var copyText = document.querySelector(".wallet-address");
            console.log(copyText)


            /* Copy the text inside the text field */
            navigator.clipboard.writeText(copyText.innerHTML);
        }
    },
    mounted(){
      if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        this.showAside = false
      }
    }
  }).mount("#app-index");