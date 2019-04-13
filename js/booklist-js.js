
//已读
var have_read_block = new Vue({
  el:'#have_read',
  data:{
    toggle:true,
    show:'show',
    hidden:'hidden',
    isDeleted:false,
    booklist:['xiaowang'],
    bookname:""
  },
  methods:{
    addBook:function(){
      if(this.bookname!=""){
        this.booklist.push(this.bookname);
      }
    },
    deleteBook:function(e){
      // console.log(e);
      for(var i=0;i<=3;i++){
        if(e.path[i].nodeName=="LI"){
          var index = this.booklist.indexOf(e.path[i].innerText);
          this.booklist.splice(index,1);
          break;
        }
      }
    },
  },
});
var have_read_link = new Vue({
  el:'#have_read_link',
  data:{
    isActive:true,
  },
  methods:{
    clicked:function(){
      have_read_link.isActive=true;
      reading_book_link.isActive=false;
      gonna_read_link.isActive=false;
      have_read_block.toggle=true;
      reading_book_block.toggle=false;
      gonna_read_block.toggle=false;
    }
  }
});
//正在读
var reading_book_block = new Vue({
  el:'#reading_book',
  data:{
    toggle:false,
    show:'show',
    hidden:'hidden',
    bookname:"",
    booklist:[],
  },
  methods:{
    addBook:function(){
      if(this.bookname!=""){
        this.booklist.push(this.bookname);
      }
    },

    deleteBook:function(e){
      for(var i=0;i<=3;i++){
        if(e.path[i].nodeName=="LI"){
          var index = this.booklist.indexOf(e.path[i].innerText);
          this.booklist.splice(index,1);
          break;
        }
      }
    },
  },
});
var reading_book_link = new Vue({
  el:'#reading_book_link',
  data:{
    isActive:false,
  },
  methods:{
    clicked:function(){
      have_read_link.isActive=false;
      reading_book_link.isActive=true;
      gonna_read_link.isActive=false;
      have_read_block.toggle=false;
      reading_book_block.toggle=true;
      gonna_read_block.toggle=false;
    }
  }
});
//将要读

var gonna_read_block = new Vue({
  el:'#gonna_read',
  data:{
    toggle:false,
    show:'show',
    hidden:'hidden',
    bookname:"",
    booklist:[],
  },
  methods:{
    addBook:function(){
      if(this.bookname!=""){
        this.booklist.push(this.bookname);
      }
    },

    deleteBook:function(e){
      for(var i=0;i<=3;i++){
        if(e.path[i].nodeName=="LI"){
          var index = this.booklist.indexOf(e.path[i].innerText);
          this.booklist.splice(index,1);
          break;
        }
      }
    },
  },
});
var gonna_read_link = new Vue({
  el:'#gonna_read_link',
  data:{
    isActive:false,
  },
  methods:{
    clicked:function(){
      have_read_link.isActive=false;
      reading_book_link.isActive=false;
      gonna_read_link.isActive=true;
      have_read_block.toggle=false;
      reading_book_block.toggle=false;
      gonna_read_block.toggle=true;
    }
  }
});
