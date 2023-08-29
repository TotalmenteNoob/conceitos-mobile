import React from 'react'
import { Text } from 'react-native'

const Objeto = () => {

    const carro = {marca:'vw', modelo: 'Fusca', ano: '1978', cor: 'preto', foto: ''}
    
    const carros = ['Fusca', 'Celta', 'Pálio', 'Gol', 'Ka']

    return (
        <>
            {carros.map(item => (
                <Text>{item}</Text>
            ))}
        </>
    )
}

export default Objeto