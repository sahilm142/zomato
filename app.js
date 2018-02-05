var express=require('express');
var app=express();
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
mongoose.connect('mongodb://zomato:zomato@ds241677.mlab.com:41677/zomato');
var dish=require('./models/dish');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/',function (req,res) {
  res.sendFile(__dirname+'/index.html');
});

app.get('/admin',function (req,res) {
res.sendFile(__dirname+'/admin.html');
});

app.get('/login',function (req,res) {
res.sendFile(__dirname+'/login.html');
});

app.post('/login',function (req,res) {

});
                                                                              //               GET DISHES

// app.get('/api/getDishes',function (req,res) {
//   	var sql = "select * from food_rating where (dish_name like '%" + req.query.dishName + "%' or resteraunt_name like '%" + req.query.dishName + "%')  and cost >= "  + req.query.minPrice + " and cost <= " + req.query.maxPrice + " and dish_rating >= " + req.query.minRating + " and dish_rating <= " + req.query.maxRating;

//     if(req.query.type=='All')
//     sql+=';'
//     else
//     sql=sql+' and type = "'+ req.query.type +'";';
//     console.log(sql);
//     con.query(sql, function (err, result) {
//     if (err) console.log(err);
//       console.log("Result: " + result);
//       res.send({result:result});
//   });

// });

//                                                                               //               UPDAT RATING

// app.get('/api/updateReview',function (req,res) {
//   console.log(req.query);
//   var sql="update food_rating set dish_rating = ((dish_rating * numberOfRatings) + " +req.query.value+ " ) / (numberOfRatings + 1),numberOfRatings = numberOfRatings + 1 where dish_name = '" +req.query.dish+ "' and resteraunt_name = '" +req.query.resteraunt+ "';";
//   con.query(sql,function (err,result) {
//    if(err) console.log(err);
//     console.log(result);
//     res.send({result:result});
//   });
// });
//                                                                                 //                   ADMIN
// app.get('/admin/api',function (req,res) {
//   var sql="select * from food_rating;"
//   con.query(sql,function (err,result) {
//     if(err) throw err;
//     //console.log(result);
//     res.send({result:result});
//   });
// });
//                                                                                //                 ADD
app.post('/admin/add',function (req,res) {
  var Dish=new dish(req.body);
  Dish.save(()=>{res.redirect('/admin');})
});
//                                                                                //                DELETE
// app.get('/admin/api/delete',function (req,res) {
//   var sql="delete from food_rating where dish_name='"+req.query.dish+"' and resteraunt_name='"+req.query.resteraunt+"';";
//   con.query(sql,function (err,result) {
//     if(err) console.log(err);
//     console.log(result);
//     res.send({result:result});
//   });
// });

app.listen(4200,function () {
  console.log("started listening at port 4200:");
});
