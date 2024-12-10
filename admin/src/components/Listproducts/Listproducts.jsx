import React ,{useState,useEffect} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import './Listproducts.css'
import cross_icon from '../assets/cross_icon.png'
const Listproducts = () => {
    const [allproducts,setAllproducts] = useState([]);
    const fetchInfo = async ()=>{
        await fetch('http://localhost:3000/allproducts')
        .then((res)=>res.json())
        .then((data)=> {
            // console.log(data[0].image)
            setAllproducts(data);
        })
    }
    useEffect(()=>{
        fetchInfo();
    },[])

    const deleteItem = async (id)=>{
        let responseData = {};
        await fetch("http://localhost:3000/removeproduct",{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        }).then((res)=>res.json())
        .then((data)=>{
            responseData = data;
        }).catch((err)=>{
            console.log("Error ra delete panla da")
        })
        if(responseData.success){
            await fetchInfo();
            console.log("Deleted sucesfully")
        }else{
            console.log("Failed to delete")
        }
    }
  return (
    <div className='total'>
        <Sidebar/>
        <div className="product-list">
            <h1>All products List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr/>
                {allproducts.map((product,index)=>{
                    return <>
                    <div key={index} className="listproduct-format-main listproduct-format">
                        <img className="listproduct-product-icon" src={product.image} alt="" />
                        <p>{product.pro_name}</p>
                        <p>${product.old_price}</p>
                        <p>{product.new_price}</p>
                        <p>{product.category}</p>
                        <img className="listproduct-remove-icon" onClick={()=>{deleteItem(product.id)}}src={cross_icon} alt="" />
                    </div>
                    <hr/>
                    </>
                })}
            </div>
        </div>
    </div>
  )
}

export default Listproducts