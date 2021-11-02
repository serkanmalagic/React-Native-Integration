import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class HomePageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null
        };
    }

    componentDidMount() {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => r < esponse.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    data: responseJson
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={StyleSheet.container}>
                    <Text>Loading</Text>
                </View>
            );
        } else {
            let datas = this.state.dataSource;
        }

        return (
            <View>
                <Text> {datas} </Text>
            </View>
        );
    }
}
