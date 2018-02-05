
$(document).ready(function () {

  $('.choice').on('change',function () {
    console.log('changed...');
        var data={
        dishName:$('#dishSearched').html(),
        minPrice:$('#minPrice').val(),
        maxPrice:$('#maxPrice').val(),
        minRating:$('#minRating').val(),
        maxRating:$('#maxRating').val(),
        type:$('#type').val()
      }
  //    console.log(data);
      updateView(data);

  });


});

function search(){
  var dishName=$('#dishName').val();
  $('#dishSearched').html(dishName);
  var data={
  dishName:$('#dishSearched').html(),
  minPrice:"0",
  maxPrice:"2000",
  minRating:"0",
  maxRating:"5",
  type:"All"
}
updateView(data);
}


function search2(){
  var  dishName=$('#dishName2').val();
  $('#dishSearched').html(dishName);
  var data={
  dishName:$('#dishName2').val(),
  minPrice:$('#minPrice').val(),
  maxPrice:$('#maxPrice').val(),
  minRating:$('#minRating').val(),
  maxRating:$('#maxRating').val(),
  type:$('#type').val()
}
updateView(data);
}


function updateView(data) {
  //console.log('Updating');
  $.ajax({
      type: "GET",
      url: "/api/getDishes",
      data: data,
      cache: false,
      contentType: "application/json; charset=utf-8",
      dataType: "json",

      success: function(response) {
        //console.log("update suceess");
        $('#homePage').css('display','none');
        $('#dishPage').css('display','inherit');
        var theTemplateScript = $("#templating").html();
        var theTemplate = Handlebars.compile(theTemplateScript);
    //    alert("sucess");
        $('#dishes').html(theTemplate({dishes:response.result}));
        //console.log(theTemplate({dishes:response.result}));
      //  alert("hhh");
        $('.acidjs-rating-stars input').on('change', function(e) {
          console.log(e);
          console.log(e.currentTarget.dataset);
          updateReview(e.currentTarget.dataset);
        //  alert('changed');
      });
      },

      failure: function(response) {
        console.log("failed");
      }
  });

}

function updateReview(data) {
  $.ajax({
    type:"GET",
    url:"/api/updateReview",
    data:data,
    cache:false,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success:function functionName(response) {
      console.log("Review Updated");
      var data={
      dishName:$('#dishSearched').html(),
      minPrice:$('#minPrice').val(),
      maxPrice:$('#maxPrice').val(),
      minRating:$('#minRating').val(),
      maxRating:$('#maxRating').val(),
      type:$('#type').val()
    }
    console.log(data);
    updateView(data);
    },
    failure: function(response) {
      console.log("review update failed");
    }
  });
}
