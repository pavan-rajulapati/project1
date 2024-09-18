import React from 'react';
import '../styles/addProduct.css'
import { ImCross } from "react-icons/im"; 
import { IoMdInformationCircle } from "react-icons/io";  

const AddProducts = () => {

    const colors = ['red', 'green', 'yellow', 'black', 'pink', 'blue', 'orange', 'white', 'brown'];

    return (
        <div className='product'>
            <div className='container'>
                <div className="product-form">
                    <form>
                        <div className="product-info">
                            <div className="text">
                                <p>Create a New Product</p>
                            </div>

                            <div className="product-name">
                                <label>
                                    Product Name
                                    <input type="text" placeholder='SAMSUNG Galaxy F34 5G' />
                                </label>
                            </div>

                            <div className="brand">
                                <label>
                                    Brand
                                    <input type="text" placeholder='Puma, adidas, redmi' />
                                </label>
                            </div>

                            <div className="description">
                                <label>
                                    Description
                                    <textarea placeholder='About Product' />
                                </label>
                            </div>

                            <div className="sale-price">
                                <label>
                                    Sales Price
                                    <input type="number" placeholder='999' />
                                </label>
                            </div>

                            <div className="actual-price">
                                <label>
                                    Actual Price
                                    <input type="number" placeholder='1599' />
                                </label>
                            </div>

                            <div className="stock">
                                <label>
                                    Stock
                                    <input type="text" placeholder='1599' />
                                </label>
                            </div>

                            <div className="category">
                                <label>
                                    Select Category
                                    <select >
                                        <option value="null">Category</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="fashoin">Fashoin</option>
                                        <option value="bueaty">Bueaty</option>
                                        <option value="furniture">Furniture</option>
                                        <option value="health">Health</option>
                                        <option value="education">Education</option>
                                    </select>
                                </label>
                            </div>

                            <div className="sizes">
                                Select Available Sizes
                                <ul>
                                    {['38', '40', '42', '44', '46'].map(size => (
                                        <li key={size}>{size}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="colors">
                                Select Available Colors
                                <div className="color-options">
                                    {colors.map((item, index) => (
                                        <div
                                            key={index}
                                            className="color"
                                            style={{ backgroundColor: item, width: '30px', height: '30px', margin: '5px', display: 'inline-block', cursor: 'pointer', borderRadius : 50 }}
                                        >
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="image-section">
                            <div className="keywords">
                                <label >
                                    Enter your Keywords Seperated by Coma
                                    <input type="text" placeholder='mobile, latestmobile, under20000'/>
                                </label>
                            </div>
                            <div className="images">
                                <label >
                                    Upload Images
                                    <input type="file" />
                                </label>
                            </div>

                            <div className="note">
                                <span><IoMdInformationCircle /></span>
                                <p>Before adding the images please watch this video</p>
                            </div>

                            <div className="image">
                                <div className='hello'>
                                    <span><ImCross /></span>
                                    <img src="photos\shopping-4360296.jpg" alt="" />
                                </div>
                                <div className='hello'>
                                    <span><ImCross /></span>
                                    <img src="photos\shopping-4360296.jpg" alt="" />
                                </div>
                                <div className='hello'>
                                    <span><ImCross /></span>
                                    <img src="photos\shopping-4360296.jpg" alt="" />
                                </div>
                                <div className='hello'>
                                    <span><ImCross /></span>
                                    <img src="photos\shopping-4360296.jpg" alt="" />
                                </div>
                                <div className='hello'>
                                    <span><ImCross /></span>
                                    <img src="photos\shopping-4360296.jpg" alt="" />
                                </div>
                                
                            </div>

                            <div className="warranty">
                                <label >
                                    Warranty
                                    <input type="number" placeholder='like 4....'/>
                                </label>
                            </div>

                            <div className="Btn">
                                <button type='submit'>Publish</button>
                            </div>
                        </div>

                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
