function search() {
  var theTemplateScript = $("#templating").html();
  var theTemplate = Handlebars.compile(theTemplateScript);
  var dishes = [
    {dish_name:"Dal",dish_resturant:"Shahi Darbar",dish_price:"100",dish_rating:"3.5",dish_address:"Boys Hostel,IIT Patna"},
    {dish_name:"Rice",dish_resturant:"Shahi Darbar",dish_price:"200",dish_rating:"3.5",dish_address:"Boys Hostel,IIT Patna"},
    {dish_name:"Chicken",dish_resturant:"Shahi Darbar",dish_price:"300",dish_rating:"3.5",dish_address:"Boys Hostel,IIT Patna"},
    {dish_name:"dal",dish_resturant:"Shahi Darbar",dish_price:"400",dish_rating:"3.5",dish_address:"Boys Hostel,IIT Patna"},
    {dish_name:"dal",dish_resturant:"Shahi Darbar",dish_price:"500",dish_rating:"3.5",dish_address:"Boys Hostel,IIT Patna"},
    {dish_name:"dal",dish_resturant:"Shahi Darbar",dish_price:"600",dish_rating:"3.5",dish_address:"Boys Hostel,IIT Patna"},
];
 $('#dishes').html(theTemplate({dishes:dishes}));
}
