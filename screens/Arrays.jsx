import React from 'react'
import { Text } from 'react-native'

const Arrays = () => {

    const carros = ['Fusca', 'Celta', 'Pálio', 'Gol', 'Ka']
    const carro = {marca:'vw', modelo: 'Fusca', ano: '1978', cor: 'preto', foto: ''}

    return (
        <>
            {carros.map(item => (
                <Text>{item}</Text>
            ))}
        </>
    )
}

export default Arrays