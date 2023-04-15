import Lanche from '../../assets/embalagem.png'
import { Container, Image, Tela, User, DivP, DivButton, P, Pp, Lixo } from './styles'
import Trash from '../../assets/Lixo.png'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import H1 from '../../components/Title/index'
import Button from '../../components/Title/Button'
function Pedidos() {

const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
     async function viewUsers() {
        const { data: newOrder } = await axios.get("http://localhost:3001/orders");
        setOrders(newOrder)
     }
     viewUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/orders/${userId}`)

    const newOrder = orders.filter(user => user.id !== userId )
    setOrders(newOrder)
  }

  function goBackPage() {
    navigate("/")
  }


    return (

         <Tela>
          <Container>
            <Image src={Lanche}></Image >

            <div>
                <H1>Pedidos</H1>

            </div>

            <ul> 
                    { orders.map( (user) =>(
                       
                    <User key={user.id}>
                        <DivP>
                        <Pp>{user.pedido}</Pp>  <P>{user.clientName}</P>
                            </DivP>
                        <DivButton>
                            
                        <Lixo onClick={() => deleteUser(user.id)}><img src={Trash} alt='lata-de-lixo'/></Lixo>
                        </DivButton>
                    </User>  
                  ))}
                </ul>

                <Button isBack={true} onClick={goBackPage}>Voltar</Button>
          </Container>
          </Tela>


    )
}
export default Pedidos