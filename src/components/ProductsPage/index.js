import { Container } from './styles'

import Breadcrumbs from "./Breadcrumbs"
import Filters from "./Filters"
import Products from "./Products"
import Message from '../Message'


function ProductsPage() {
    return (
        <Container>
            <Breadcrumbs />
            <Message  message="Erro ao carregar produtos"/>
            <Filters />
            <Products />
        </Container>
    )
}

export default ProductsPage