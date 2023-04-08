import Lanche from '../../assets/embalagem.png'
import { Container1, Image1, H11, Tela1, User1, DivP, DivButton, Button, P, Pp, Lixo } from './styles'
import Trash from '../../assets/Lixo.png'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Pedidos() {
//const pedidos = [
    //{id: Math.random(), name: "David", age: 29},
    //{id: Math.random(), name: "Jaqueline", age: 28},
   // {id: Math.random(), name: "Jaque", age: 28}
//];
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

         <Tela1>
          <Container1>
            <Image1 src={Lanche}></Image1>

            <div>
                <H11>Pedidos</H11>

            </div>

            <ul> 
                    { orders.map( (user) =>(
                       
                    <User1 key={user.id}>
                        <DivP>
                        <Pp>{user.pedido}</Pp>  <P>{user.clientName}</P>
                            </DivP>
                        <DivButton>
                            
                        <Lixo onClick={() => deleteUser(user.id)}><img src={Trash} alt='lata-de-lixo'/></Lixo>
                        </DivButton>
                    </User1>  
                  ))}
                </ul>

                <Button onClick={goBackPage}>Voltar</Button>
          </Container1>
          </Tela1>


    )
}
export default Pedidos