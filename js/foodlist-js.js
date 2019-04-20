var calendar = new Vue({
  el:'#calendar',
  data:{
    currentYear:(new Date()).getFullYear(),
    currentMonth:(new Date()).getMonth()+1,
    currentDay:(new Date()).getDate(),
    currentWeekDay:(new Date()).getDay(),//获取当前星期X(0-6,0代表星期天)
    isToday:false,
  },
  computed:
  {
    //生成日期数组：最前面为上个月的最后几天，最后面为下个月的前几天  且数组大小为 35
    days:function(){
      var d = new Date(this.currentYear, this.currentMonth, 0);
      var dayNum = d.getDate();//得到本月天数
      var week = new Date();
      week.setDate(1);//得到本月第一天的星期数
      var lastMonth = (this.currentMonth==1) ? 12: this.currentMonth-1;//得到上个月月份
      var temp = new Date(this.currentYear, lastMonth, 0);
      var lastMonthDayNum = temp.getDate();//得到上个月天数

      var days=new Array();//初始化日期数组（初始化时未考虑星期）一维数组后面切割
      for(var i=0;i<dayNum;i++){
        days.unshift(i+1);
      }
      //添加上个月的最后几天
      for(var i=0;i<week.getDay();i++){
        days.push(lastMonthDayNum--);
      }
      //添加下个月的前几天
      var len = 35-days.length;
      for(var j=1; j <= len; j++){
        days.unshift(j);
      }
      //分割为二维数组并return反转后的数组
      var calendarDays = Array();
      for(var index=0;index<5;index++){
        calendarDays[index]=Array();
        calendarDays[index]=days.slice(index*7,index*7+7).reverse();//每个星期内的天数反转
      }
      console.log(days);
      console.log(week.getDay());
      console.log(calendarDays);


      return calendarDays.reverse();//td输出时最先输出的在下面，因此反转
    }
  },
  methods:{
    addFoodList:function(index1,index2){
      console.log(index1,index2);

    },
  }

});
var foodlist = new Vue({
  el:'#foodlist',
  data:{
    food:["1",2,3],
    foodItem:"",
  },
  methods:{
    removeItem:function(index){
      this.food.splice(index,1);
    },
    addFood:function(){
      this.food.push(this.foodItem);
    },
  },
})
