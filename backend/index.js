const express = require('express')
const multer = require('multer')
const mongoose = require('mongoose')
const path = require('path')
const port = 3000
const app = express()

mongoose.connect("mongodb+srv://Arun:ajayaadhi@cluster0.1wzql.mongodb.net/g")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination : (res,file,cb) => {
        cb(null,'uploads/images')
    },
    filename : (res,file,cb) =>{
        cb(null, file.originalname+'_'+Date.now() + path.extname(file.originalname)); 
    }
})
const upload = multer({storage:storage})

const Product = mongoose.model("Product", {
    id: { type: Number, required: true },
    pro_name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number },
    old_price: { type: Number },
    date: { type: Date, default: Date.now },
    avilable: { type: Boolean, default: true },
});


app.get('/',(req,res) => {
    res.json('Hello nanbha')
})


app.use('/images',express.static('uploads/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http:localhost:${port}/images/${req.file.filename}`
    })
})

app.post('/addproduct',async(req,res)=>{
   // console.log(req.body);
    let products = await Product.find({});
    //console.log(products)
    let id ;
    if(products.length>0){
        let last_pro = products.slice(-1);
        let last_product = last_pro[0];
        id = last_product.id+1;
    }else{
        id = 1;
    }
    const product = new Product({
        id:id,
        pro_name:req.body.name,
        category:req.body.category,
        description:req.body.description,
        old_price:req.body.old_price,
        new_price:req.body.new_price,
        image:req.body.image,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

app.post('/removeproduct',async (req,res)=>{
    let id = req.body.id;
    await Product.findOneAndDelete({id:id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

app.get('/allproducts',async(req,res)=>{
    let products = await Product.find();
    console.log("All products fetched");
    res.send(products)
})
app.listen(port,(err)=>{
    if(!err)
        console.log(`server is running on port ${port}`)
    else
        console.log("Error : ",err);
})