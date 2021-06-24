import { useState, useEffect } from 'react'

import Navbar from './Navbar'

import { AiOutlineSearch } from 'react-icons/ai'
import { Container } from './styles'
import { useProducts} from '../../ProductsContext'
import { lowerCase  } from 'lodash';

import LogoRchlo from '../../assets/riachuelo.svg'
    
function Header(){
    const data = useProducts();
    const [ findProduct, setFindProduct] = useState('');

    useEffect(()=> {
        if(findProduct === "")
            data.setProducts(data.initialProducts);
    }, [data, findProduct])

    function handleFilterProduct(event){
        event.preventDefault();
        setFindProduct(event.target.value);
        const products = data.products.filter((product) => {
          return lowerCase(product.name).includes(lowerCase(event.target.value));
        });        
        data.setProducts(products);
     }
    
    return (
        <Container>
            <div className="logo-btn">
                <h1>
                <img src={LogoRchlo} alt="logo Riachuelo" />
                </h1>
            </div>
            <div className="find-input">
                < AiOutlineSearch />
                <input 
                    type="search" 
                    placeholder="O que você está procurando?" 
                    onChange={(event) => handleFilterProduct(event)}
                    
                />
            </div>
            <Navbar />
        </Container>
        
    )
}

export default Header