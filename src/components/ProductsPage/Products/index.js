import { Container } from './styles'
import { useProducts} from '../../../ProductsContext'

function Products() {
    const data =  useProducts()
    console.log(data)
    return (
        <Container>
            <ol>
                   {data.products?.map (product => {
                    return (
                        <li key={product.sku}>
                            <div>
                            <img src={product.image} alt="Camisa 1" />
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            </div>
                        </li>
                    )
                })}   
            </ol>
        </Container>
    )
}

export default Products