import React, {useRef, useState} from 'react';
import Logo from '../../assets/logo-burguer.png'
import { ContainerGlobal, ContainerItens, Tela, Image, Input, Button, Label, H1, } from './styles'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Home() {

   
    const [orders, setOrders] = useState([])
    const inputPedido = useRef();
    const inputName = useRef();
    const navigate = useNavigate();

    async function addNewOrder() {
        const {data: newOrder} = await axios.post("http://localhost:3001/orders", {
          pedido: inputPedido.current.value,
          clientName:  inputName.current.value,
        });
           setOrders([...orders, newOrder]);
           console.log(newOrder)
           console.log(orders)
           navigate("/orders");
       }



    return (
        <Tela>
        <ContainerGlobal>
               <Image src={Logo} alt='logo-burguer'></Image>

            <ContainerItens>
                <H1> Faça seu pedido!</H1>
                <Label>Pedido</Label>
                <Input ref={inputPedido} placeholder='1 Coca-Cola, 1-X Salada'></Input>

                <Label>Nome do Cliente</Label>
                <Input  ref={inputName} placeholder='Steve Jobs'></Input>

                <Button onClick={addNewOrder}> Novo Pedido </Button>

              
            </ContainerItens>

        </ContainerGlobal>
        </Tela>
    )

    
}
export default Home