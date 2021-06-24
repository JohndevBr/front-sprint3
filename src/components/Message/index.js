import { AiOutlineClose } from "react-icons/ai";

import {ContainerMessage} from './styles'


const Message = ({message}) => (
  <ContainerMessage>
    {message}
    <a href="/">
      <AiOutlineClose />
    </a> 
  </ContainerMessage>
)
export default Message;