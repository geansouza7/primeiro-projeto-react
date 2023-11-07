import React, { useState, useRef } from "react";
import axios from 'axios'
import Hamburguer from './assets/burger.svg';
import Trash from './assets/trash.svg'

import {
    Container,
    H1,
    Image,
    ContainerItens,
    InputLabel,
    Input,
    Button,
    Burger
} from "./styles";

function App() {
    const [burgers, setBurgers] = useState([]);
    const inputOrder = useRef();
    const inputName = useRef();


    async function addNewPedido() {

        const data = await axios.post("http://localhost/3001/orders", {
            order: inputOrder.current.value,
            name: inputName.current.value,
        });
        console.log(data)

        //    setBurgers([...burgers, {
        //      id: Math.random(),
        //    order: inputOrder.current.value,
        //  name: inputName.current.value,
        //},
        // ]);
    }

    function deleteOrder(burgerId) {
        const newBurgers = burgers.filter(burger => burger.id !== burgerId);

        setBurgers(newBurgers);
    }

    return (
        <Container>
            <Image alt="logo-burger" src={Hamburguer} />
            <ContainerItens>
                <H1>Faça seu pedido!</H1>

                <InputLabel>Pedido</InputLabel>
                <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada" />

                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={inputName} placeholder="Gean Souza" />

                <Button onClick={addNewPedido}
                >Novo Pedido</Button>

                <ul>
                    {burgers.map((burger) => (
                        <Burger key={burger.id}>
                            <p>{burger.order}</p>

                            <button onClick={() => deleteOrder(burger.id)}>
                                <img src={Trash} alt="lata-de-lixo" />
                            </button>

                            <p>{burger.name}</p>
                        </Burger>
                    ))}
                </ul>
            </ContainerItens>
        </Container>
    );
}
export default App;