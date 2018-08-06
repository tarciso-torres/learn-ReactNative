import React, { Component } from 'react'
import { TextInput} from 'react-native'
import { Card, Button, CardSection } from './common'

class LoginForm extends Component {
    state = { text: '' }

    render() {
        return(
            <Card>
                <CardSection>
                    <TextInput
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        style={{ height: 40, width: 400}} />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        ) 
    };
}

export default LoginForm