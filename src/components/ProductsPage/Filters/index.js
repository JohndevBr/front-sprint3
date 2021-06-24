import { IoIosArrowDown } from "react-icons/io";

import { Content } from "./styles"

function Filters() {
    return (
        <Content>
          <li>
            Tamanho
            <IoIosArrowDown />
          </li>
          <li>
            Cor
            <IoIosArrowDown />
          </li>
          <li>
            Departamento
            <IoIosArrowDown />
          </li>
          <li>
            Categoria
            <IoIosArrowDown />
          </li>
          <li>
            Manga
            <IoIosArrowDown />
          </li>
        </Content>
    )
}

export default Filters