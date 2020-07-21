var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var Admins = require('./models/admin');
var Cat=require('./models/category');
var Subcat=require('./models/subcategory');
var cors=require('cors');
var fs = require('fs');
var Childcat=require('./models/childcategory');
var Product=require('./models/product');
var Slider=require('./models/slider');
app.use(bodyParser.json({limit:'2mb'}));
app.use(bodyParser.urlencoded({limit:'2mb',extended:true}));
mongoose.connect('mongodb+srv://jaydeep:1234@cluster0-ild9g.mongodb.net/Ecommerce',function (err,response){
if (err) { console.log('Database is not  connected'); }else{
    console.log('Database is connected');
  }
} 
);
app.use(cors());
app.set('port',process.env.port || 3000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const port = process.env.PORT || 3000;
const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
   });

   app.post('/login',function(req,res){
    console.log("in login");
    name=req.body.email;
    password=req.body.password;
    Admins.findOne({"email":name,"password":password},function(err,admin)
    {
        if(err)
        {
            console.log(err);
            alert("file");
        }
        else{

        }
        if(admin){
        if(admin.email==name){
           // console.log(user.username);
            
            console.log("correct crediantials.....")
            return res.send({status:'success'});

        }}
        else{
            console.log("worng");
            return res.send({status:'fail'});
        }   
    }); 
 });
 app.post('/category',function(req,res){
    console.log("in category");
    category=req.body.category;
    var cat=new Cat();
    cat.category=category;
    cat.save(function(err,result){
        if(err)
        {
            console.log("Error occured");
            console.log(err);
        }
        else
        {
            console.log("Inserted Successfully !");
        }
    });

});

app.post('/updatecat',function(req,res){
    const cat1=req.body._id
    Cat.updateOne({"_id":cat1} ,{$set: {"category":req.body.category}},  
		function(err,data)
		{  
			if (err) 
			{  
		    	res.send(err);         
			}  
			else
			{        
              res.send("Record has been Updated..!!");  
			}  
		});

})



//  app.post('/update',function(req,res){
//     Cat.findOne({category:req.body.category},function(req,data){
//         if(err)
//         {
//             console.log("no category found");
//         }
//         else{
            
//             data.category=req.body.category;
//             data.save(function(err,success)
//             {
//                 if(err)
//                 {
//                     console.log("data not updated !");
//                 }
//                 else{
//                     res.send({msg:true});
//                 }
//             })
//         }
//     })
//  })
 app.get("/displaycat",function(req,res){
     console.log("display data service");
    
     Cat.find({},function(err,catg){
        if(err)
        {
            console.log("Error : ")
            res.send(400)
        }
        else
        {
            console.log("all Category")
        
            res.send(catg)

        }
     });
 });
 app.get("/editcat",function(req,res){
    console.log("display data service");
    var id = req.body._id;
    Cat.find({'_id':id},function(err,catg){
       if(err)
       {
           console.log("Error : ")
           res.send(400)
       }
       else
       {
           console.log("all Category")
       
           res.send(catg)

       }
    });
});
 app.post('/subcategory',function(req,res){
     console.log("in Subcategory");
     subcategory=req.body.subcategory;
     category=req.body.category;
     var subcat=new Subcat();
     subcat.subcategory=subcategory;
     subcat.category=category;
     subcat.save(function(err,result){
         if(err)
         {
             console.log("Error Occured");
             console.log(err);

         }
         else{
             console.log("Inserted Successfully !");

         }
     });
 });

 app.get("/Displaysubcat",function(req,res){
    console.log("display data service");
   
    Subcat.find({},function(err,subcatg){
       if(err)
       {
           console.log("Error : ")
           res.send(400)
       }
       else
       {
           console.log("all Subcategory")

           res.send(subcatg)

       }
    })
 })
app.delete('/delcat/:category',function(req,res){

    console.log("in delcat method");
    console.log(req.params.category);
    category=req.query.data;
    Cat.find({"category":req.params.category},function(err,cat){
        if(err)
        {
            res.sendStatus({status:400})
            console.log("category not Found !");

        }
        else{
            console.log(cat)
            Cat.deleteOne({"category":req.params.category,"deleted":null},function(err){
                if(err)
                {
                    console.log("category is not deleted");
                    res.send(400);

                }
                else{
                    console.log("category removed !");
                    res.send({"message":"category removed !"})
                }
            })
        }
    })
});

app.delete('/delsubcat/:subcategory',function(req,res){

    console.log("in delsubcat method");
    console.log(req.params.subcategory);
    subcategory=req.query.data;
    Subcat.find({"subcategory":req.params.subcategory},function(err,subcat){
        if(err)
        {
            res.sendStatus({status:400})
            console.log("category not Found !");

        }
        else{
        
            Subcat.remove({"subcategory":req.params.subcategory,"deleted":null},function(err){
                if(err)
                {
                    console.log("subcategory is not deleted");
                    res.send(400);

                }
                else{
                    console.log("subcategory removed !");
                    res.send({"message":"subcategory removed !"})
                }
            })
        }
    })
});


app.delete('/delchildcat/:childcategory',function(req,res){

    console.log("in delchildcat method");
    console.log(req.params.childcategory);
    childcategory=req.query.data;
    Childcat.find({"childcategory":req.params.childcategory},function(err,childcat){
        if(err)
        {
            res.sendStatus({status:400})
            console.log("category not Found !");

        }
        else{
        
            Childcat.remove({"childcategory":req.params.childcategory,"deleted":null},function(err){
                if(err)
                {
                    console.log("subcategory is not deleted");
                    res.send(400);

                }
                else{
                    console.log("childcategory removed !");
                    res.send({"message":"childcategory removed !"})
                }
            })
        }
    })
});


app.delete('/delslider/:_id',function(req,res){

    console.log("in delchildcat method");
    console.log(req.params._id);
    slider=req.query.data;
    Slider.find({"_id":req.params._id},function(err,slider){
        if(err)
        {
            res.sendStatus({status:400})
            console.log("slider not Found !");

        }
        else{
        
            Slider.remove({"_id":req.params._id,"deleted":null},function(err){
                if(err)
                {
                    console.log("slider is not deleted");
                    res.send(400);

                }
                else{
                    console.log("slider removed !");
                    res.send({"message":"slider removed !"})
                }
            })
        }
    })
});


app.delete('/delprd/:_id',function(req,res){

    console.log("in delprd method");
    console.log(req.params._id);
    prd=req.query.data;
    Product.find({"_id":req.params._id},function(err,prd){
        if(err)
        {
            res.sendStatus({status:400})
            console.log("product not Found !");

        }
        else{
        
            Product.remove({"_id":req.params._id,"deleted":null},function(err){
                if(err)
                {
                    console.log("product is not deleted");
                    res.send(400);

                }
                else{
                    console.log("product removed !");
                    res.send({"message":"product removed !"})
                }
            })
        }
    })
});





app.post('/childcategory',function(req,res){
    console.log("in Childcategory");
    childcategory=req.body.childcategory;
    subcategory=req.body.subcategory;
    category=req.body.category;
    var childcat=new Childcat();
    childcat.childcategory=childcategory;
    childcat.subcategory=subcategory;
    childcat.category=category;
    childcat.save(function(err,result){
        if(err)
        {
            console.log("Error Occured");
            console.log(err);
            isSucceedr: false
        }
        else{
            console.log("Inserted Successfully !");
            isSucceedr: true
        }
     });
    });


    app.get("/displaychildcat",function(req,res){
        console.log("display data service");
       
        Childcat.find({},function(err,childcatg){
           if(err)
           {
               console.log("Error : ")
               res.send(400)
           }
           else
           {
               console.log("all Childcategory")
            
               res.send(childcatg);
    
           }
        })
     })
     app.post("/requestentry", async (req, res) => {
        var rd = new Product();
          console.log("you are in product server")
        
            rd.category=req.body.cat;
            rd.subcategory=req.body.subcat;
            rd.childcategory=req.body.childcat;
            rd.product=req.body.product;
            rd.price=req.body.price;
            rd.desc=req.body.desc;
            rd.img=req.body.img;
        
            rd.save(function(err, data) {
              if (err) {
                console.log("Request error" + err);
                res.status(500).json({
                  isSucceedr: false
                });
              } else {
                
                console.log("Request saved successfully");
                res.status(200).json({
                 isSucceedr: true
                 
                });
            
              }
            });
    });
    
    app.post("/requestentry1", async (req, res) => {
        var rd = new Slider();
          
            rd.slider=req.body.slider;
            rd.desc=req.body.desc;
            rd.img=req.body.img;
            
            rd.save(function(err, data) {
              if (err) {
                console.log("Request error" + err);
                res.status(500).json({
                  isSucceedr: false
                });
              } else {
                
                console.log("data inserted successfully");
                res.status(200).json({
                 isSucceedr: true
                 
                });
                
              }
            });
    });

    app.get("/displayslider",function(req,res){
        console.log("display data service");
       
        Slider.find({},function(err,slider){
           if(err)
           {
               console.log("Error : ")
               res.send(400)
           }
           else
           {
               console.log("all Childcategory")
               res.send(slider);
    
           }
        })
     })
  
     app.get("/displayproduct",function(req,res){
        console.log("display data service");
       
        Product.find({},function(err,product){
           if(err)
           {
               console.log("Error : ")
               res.send(400)
           }
           else
           {
               console.log("all Childcategory")
               res.send(product);
    
           }
        })
     })
  