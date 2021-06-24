import Header from "./components/Header"
import ProductsPage from "./components/ProductsPage"
import { GlobalStyle } from "./styles/global"
import { ProductsProvider } from "./ProductsContext"

function App() {
  return (
    <ProductsProvider>
      <Header />
      <ProductsPage />
      <GlobalStyle />
    </ProductsProvider>
  );
}

export default App;
