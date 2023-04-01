import Lanche from '../../assets/embalagem.png'
import { Container1, Image1, H11, Body1, User1 } from './styles'
import Trash from '../../assets/Lixo.png'

function Pedidos() {
const pedidos = [
    {id: Math.random(), name: "David", age: 29},
    {id: Math.random(), name: "Jaqueline", age: 28},
];
    return (

         <Body1>
          <Container1>
            <Image1 src={Lanche}></Image1>

            <div>
                <H11>Pedidos</H11>

            </div>

            <ul> 
                    { pedidos.map( user =>(
                     <div>  
                    <User1 key={user.id}>
                        <p>{user.name}</p> - <p>{user.age}</p>
                        <button><img src={Trash} alt='lata-de-lixo'/></button>
                    </User1>
                    </div> 
                  ))}
                </ul>
          </Container1>
          </Body1>


    )
}
export default Pedidos