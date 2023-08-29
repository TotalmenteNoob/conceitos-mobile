import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'

const LeftContent = props => <Avatar.Icon {...props} icon="account-box" />
const LeftContent1 = props => <Avatar.Icon {...props} icon="folder" />
const LeftContent2 = props => <Avatar.Icon {...props} icon="account-plus" />
const LeftContent3 = props => <Avatar.Icon {...props} icon="airballoon" />

const info = ["Pedro", "Tiago", "João", "Mateus"]

const Page4 = () => {
    return (
        <>

            <Button title='Página 1' onPress={() => navigation.navigate('Page1')} />
            <Button title='Página 2' onPress={() => navigation.navigate('Page2')} />

            <Card style={{ margin: 10 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
            <Card style={{ margin: 10 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent1} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
            <Card style={{ margin: 10 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent2} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
            <Card style={{ margin: 10 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent3} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </>
    )
}

export default Page4