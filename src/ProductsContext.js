import { createContext, useState, useEffect, useContext } from 'react'

export const ProductsContext = createContext([])

export const ProductsProvider= ({children}) => {
    const [ products, setProducts ] = useState([])
    const [initialProducts, setInitialProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/api/products')
        .then( response => response.json())
        .then( data => {
            setProducts(data);
            setInitialProducts(data);
        })
        
    }, [])

    return(
        <ProductsContext.Provider value={{products, setProducts, initialProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => {
    const context = useContext(ProductsContext)
    if(!context) throw new Error("UseProducts tá usando errado animal")
    // const { products, setProducts } = context
    return context 
}