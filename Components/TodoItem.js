import React, { Component } from 'react'
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native'

export class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const TodoItem = this.props.todoItem;
        return (
            <TouchableOpacity
                onPress={() => this.props.toggleDone()}
                style={styles.todoItem}>
                <Text style={(TodoItem.done) ? { color: '#AAAAAA' } : { color: '#313131' }}>
                    {TodoItem.title}
                </Text>
                <Button
                    title="Remove"
                    color={(TodoItem.done) ? 'rgba(200, 0, 0, 0.5)' : 'rgba(255, 0, 0, 1)'}
                    onPress={() => this.props.removeTodo()}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    todoItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15
    }
})

export default TodoItem
