import React,{useState} from 'react'
import defImg from '../assets/upload_cloud_icon.svg'
import './Addproduct.css'
const Addproduct = () => {
   const [image,setImage] = useState(false);
   const [productDetails,setProductDetails] = useState({
        pro_name:"",
        category:"men",
        new_price:"",
        old_price:"",
        image:"",
        description:"summa nanbha"
   })
   const imgHandle = (e) =>{
        setImage(e.target.files[0]);
   }
   const changeHandle = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
   }
   const addProduct = async ()=>{
         console.log(productDetails);
        const formData = new FormData()
        formData.append('product',image)
        let responseData;
        await fetch('http://localhost:3000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((res) => res.json())
        .then((data) => {
            responseData=data
        }).catch((err) => {
            console.log(err)
        })
        if(responseData.success===1){
            let product = productDetails;
            product.image = responseData.image_url;
            console.log(productDetails)
            if(!product.image){
                alert("Upload image please!!")
                return;
            }
            await fetch('http://localhost:3000/addproduct',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',  // Tell the server it's JSON
                },
                body:JSON.stringify(productDetails),
            }).then(res => res.json()).then(data =>{
                if(data.success){
                    alert("Product added")
                }else{
                    alert("Failed")
                }
            }).catch(err => {
                console.log("Error in uploading in db")
                console.log(err)
            })
        }else{
            console.log("Failure to upload")
        }
   }
  return (
    <div className="addproduct">
            <p>Product title</p>
            <input placeholder="Type here" name="pro_name" onChange={changeHandle} value={productDetails.pro_name}></input>
            <div className="price">
                <div className="orgprice">
                    <p>Price</p>
                    <input type="text" name="new_price" placeholder="Type here" onChange={changeHandle} value={productDetails.new_price}/>
                </div>
                <div className="offerprice">
                    <p>Offer Price</p>
                    <input type="text" name="old_price" placeholder="Type here" onChange={changeHandle} value={productDetails.old_price}/>
                </div>
            </div>
            <p>Product Category</p>
            <select name="category" onChange={changeHandle} value={productDetails.category}>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
            </select>
            <div className="uploading">
                <label htmlFor='file-input'>
                <img src={image?URL.createObjectURL(image):defImg} alt="" />
                </label>
                <input onChange={imgHandle} type="file" name="image" id="file-input" hidden/>
            </div> 
            <button type="submit" onClick={addProduct}>ADD</button>
        </div>
  )
}

export default Addproduct