var booklist = new Vue({
  el:'#booklist',
  data:{
    book:'book',
    booklist:[1],
  },
  methods:{
    onClick:function(){
      bookname = booklist.$data.book;
      console.log(bookname);
      this.$data.booklist.push(bookname);
    },
  }
})
