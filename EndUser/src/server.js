var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var app=express();
var fs=require('fs');
var session = require('express-session')
var cors=require("cors");

//models
var register=require("./models/UserRegister");
var category=require('./models/category');
var subcategory=require('./models/subcategory');
var childcategory=require('./models/childcategory');
var todayoffer=require('./models/Todayoffer');
var Product_Details=require('./models/Product_Details');
var slider=require("./models/slider");
var Review=require("./models/Review");
var que=require("./models/Question");

//nodemailer
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({ 
                  service: 'gmail', 
                  auth: { 
                      user: 'rjsolutions512@gmail.com', 
                      pass: 'RajPanchal512' }  
                });



var sess;

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://jaydeep:1234@cluster0-ild9g.mongodb.net/Ecommerce',{ useNewUrlParser: true },function(err,response){
    if(err){
        console.log("DataBase connection is not Established.");
    }
    else{
        console.log("DataBase connection is Established.");
    }
});

app.use(cors());
app.set('port',process.env.port || 8000);

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const port=process.env.PORT || 8000;
const server=app.listen(port,function(){
    console.log("Listening on port "+port);
});
 
app.post("/register",function(req,res){
    console.log('Register is Processing..');
    var mailOptions = {
        from: 'rjsolutions512@gmail.com',
        to: req.body.Email,
        subject: 'Successfully Registered',
        html: "<h1 style='color:blue;' >Your Details</h1><table style='background:MintCream; width: 100%;border:2px solid black;'>" +
              "<tr><td>Name</td><td>" + req.body.FirstName + " " + req.body.LastName + "</td></tr>" +
              "<tr><td>Phone</td><td>" + req.body.PhoneNo + "</td></tr>" +
              "<tr><td>You Are Successfully Registred on our website....</td></tr>"+
              "</table>"
      };
    var nr=new register();
    nr.FirstName=req.body.FirstName;
    nr.LastName=req.body.LastName;
    nr.Password=req.body.Password;
    nr.Email=req.body.Email;
    nr.PhoneNo=req.body.PhoneNo;
    nr.save(function(err,result){
        if(err)
        {
            console.log("Error Occured.");
            console.log(err);
            return res.send({status:'false'});
        }
        else
        {
            //console.log("User Successfully Registered and Userdetails..");
            //console.log(nr);
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) { 
                    console.log(error); 
                }
                else { 
                    console.log('Email sent: ' + info.response); 
                }
                });
            return res.send({status:'success'});
        }
    });
});

app.post("/logincheck",function(req,res){
    console.log("logging is processing...");
    sess = req.session;
    sess.name=req.body.UserName;
    console.log("session settled: "+sess.name);
    register.findOne({"FirstName":req.body.UserName,"Password":req.body.Password},function(err,result){
        if(err){
            console.log(err);
        }
        if(result){
            if(result.FirstName==req.body.UserName){
                console.log(sess.name + " " +"logged in..");
                return res.send({status:'success',user:sess.name});
            }
        }
        else{
            console.log("Incorrect Crediantials...Please try Again..");
            return res.send({status:'fail'});
        }
    });
});

app.get("/Display",function(req,res){
   //console.log("Displaying Category...");
   category.find({},function(err,result){
       if(err)
       {
           console.log(err);
           res.sendStatus(404);
       }
       else
       {
           //console.log("Category_List\n");
           //console.log(result);
           res.send(result);
       }
   })
});

app.get("/Displaysubcategory",function(req,res){
    //console.log("Displaying Subcategory..");
    subcategory.find({},function(err,result){
        if(err)
        {
            console.log(err);
            res.sendStatus(404);
        }
        else
        {
           //console.log("SubCategory_List\n");
           // console.log(result);
            res.send(result);
        }
    })
});

app.get("/Displaychildcategory",function(req,res){
    //console.log("Displaying Childcategory..");
    childcategory.find({},function(err,result){
        if(err){
            console.log(err);
            res.sendStatus(404);
        }
        else{
            //console.log("ChildCategory_List\n");
            //console.log(result);
            res.send(result);
        }
    })
});

/*app.get("/Displaytodayoffer",function(req,res){
    console.log("Displaying Offers..");
    var offer=new todayoffer();
    offer.Original_Price="45000";
    offer.Discount_Price="35000";
    offer.Product_Name="Oneplus 7 pro";
    offer.Image.data=fs.readFileSync('../assets/slider/1.jpg');
    offer.Image.contentType='jpg';
    offer.save(function(err,result){
         if(err){
             console.log(err);
             res.sendStatus(404);
         }
         else{
             console.log("product Added Successfully");
             console.log(result);
         }
    });
})*/

app.get("/DisplayInfo/:id",function(req,res){
      Product_Details.find({"ProductName":req.params.id},function(err,result){
          if(err){
              console.log(err);
              res.sendStatus(404);
          }
          else{
              //console.log("All details");
              //console.log(result);
              res.send(result);
          }
      });
});

app.get("/DisplayListSub/:id",function(req,res){
    Product_Details.find({"SubCategory":req.params.id},function(err,result){
        if(err){
            console.log(err);
            res.sendStatus(404);
        }
        else{
            //console.log("All Category");
            //console.log(result);
            res.send(result);
        }
    });
});

app.get("/DisplayListChild/:id1/:id2",function(req,res){
    Product_Details.find({"ChildCategory":req.params.id2},function(err,result){
        if(err){
            console.log(err);
            res.sendStatus(404);
        }
        else{
           // console.log("All Category");
           // console.log(result);
            res.send(result);
        }
    });
});

app.get("/Slider",function(req,res){
    slider.find({},function(err,result){
       if(err){
           console.log(err);
           res.sendStatus(404);
       }
       else{
             //console.log("All Slider");
             //console.log(result);
             res.send(result);
       }
    });
})

app.get("/DisplayReview",function(req,res){
    Review.find({},function(err,result){
        if(err){
           console.log(err);
           res.sendStatus(404);
        }
        else{
            //console.log("All Review");
            //console.log(result);
            res.send(result);
      }
    })  
})

app.get("/Displayquery",function(req,res){
    //console.log("DisplayQuery Processing..");
     que.find({},function(err,result){
         if(err){
             console.log(err);
             res.sendStatus(404);
         }
         else{
             //console.log("All Query");
             //console.log(result);
             res.send(result);
         }
     })
})
app.post("/Insertview",function(req,res){
    console.log("Insert Processing...");
    var review=new Review();
    review.Category=req.body.Category;
    review.SubCategory=req.body.S_Category;
    review.ChildCategory=req.body.C_Category;
    review.ProductName=req.body.p_name;
    review.Date=req.body.date
    review.Name=req.body.uname;
    review.Review=req.body.review;
    review.save(function(err,result){
        if(err)
        {
            console.log("Error Occured.");
            console.log(err);
            return res.send({status:'false'});
        }
        else
        {
            //console.log("Review Successfully Inserted..");
            //console.log(Review);
            return res.send({status:'success'});
        }
    });
})

 app.post("/sendmail",function(req,res){
   console.log("Email Sending..");
   var mailOptions = {
    from: 'rjsolutions512@gmail.com',
    to: req.body.email,
    subject: 'Thank You For Reviewing Our App',
    html: "<h1 style='color:blue;' >Your Details</h1><table style='background:MintCream; width: 100%;border:2px solid black;'>" +
          "<tr><td>Name</td><td>" + req.body.fname + " " + req.body.lname + "</td></tr>" +
          "<tr><td>Content</td><td>" + req.body.content + "</td></tr>" +
          "<tr><td>Thanks For Giving Us FeedBack....</td></tr>"+
          "</table>"
  };
    transporter.sendMail(mailOptions, function (error, info) {
    if (error) { 
        console.log(error); 
        return res.send({status:'fail'});
    }
    else { 
        console.log('Email sent: ' + info.response);
        return res.send({status:'success'}); 
    }
    });
 });

 app.get("/myinfo/:name",function(req,res){
   console.log("Information Displaying..");
   register.find({"FirstName":req.params.name},function(err,result){
    if(err){
        console.log(err);
        res.sendStatus(404);
    }
    else{
        //console.log("All Info of User");
        //console.log(result);
        res.send(result);
    }
   });
});
