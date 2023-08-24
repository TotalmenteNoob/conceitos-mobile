import React from 'react'
import { Button, Text } from 'react-native'
import Botoes from '../components/Botoes'
import Card from '../components/Card'

const Page1 = () => {
    return (
        <>
            <Botoes />
            <Card titulo='sem conteúdo'></Card>
            <Card titulo='Victor'>
                <Text>React Native</Text>
            </Card>

            <Card titulo='mobile'>
                <Text>Parágrafo 1</Text>
                <Text>Parágrafo 2</Text>
                <Text>Parágrafo 3</Text>
                <Button title='Detalhes'></Button>
            </Card>

            <Card titulo='framengo'>

            </Card>


        </>
    )
}

export default Page1