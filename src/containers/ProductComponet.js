import React from 'react'
import { useSelector } from 'react-redux';
// import Header from './Header';
import { Link } from 'react-router-dom';

const ProductComponet = () => {
    const product = useSelector((state) => state.allprouct.products);
    // console.log("product component", product);
    // const { id, title } = product[0];

    const renderList = product.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div style={{ padding: "20px",paddingTop:"20px" }}>
                <div className='four wide cloumn' key={id}>
                    <Link to={`list/${id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src={image} alt={title}  style={{objectFit:"fill",width:"100%",height:"200px"}}/>
                            </div>
                            <div className='content'>
                                <div className='header'>
                                    {title}
                                </div>
                                <div className='meta price'>
                                    $ {price}
                                </div>
                                <div className='meta'>
                                    {category}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>

             </div>

        )
    })

    return (
        <>
            {renderList}
        </>

    )
}

export default ProductComponet
