import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const TodoApp = () => {
    const [todo, setTodo] = useState("");
    const [allTodos, setAlltodos] = useState([]);
    const [editTodo, setEdittodo] = useState(null);

    const addtodo = () => {
        if (todo === "") return (Alert.alert("Add Todo", "please enter your todo"));
        if (editTodo !== null) {
            const updatetodos = [...allTodos]
            updatetodos[editTodo] = todo
            setAlltodos(updatetodos)
            setEdittodo(null)
        }
        else {
            setAlltodos([...allTodos, todo])
        }
        setTodo("")
    };

    const edittodo = (index) => {
        setTodo(allTodos[index])
        setEdittodo(index)
    }

    const deletetodo = (index) => {
        const updateedtodo = allTodos.filter((_, i) => i !== index)
        setAlltodos(updateedtodo)
    }

    const renderItem = (item, index) => {
        return (
            <View style={styles.itemcontainer}>
                <View style={styles.itemtextcontainer}>
                    <Text style={styles.itemtxt}>{item}</Text>
                </View>
                <View style={styles.btncontainer}>
                    <TouchableOpacity style={styles.editbtn} onPress={() => edittodo(index)}>
                        <Text style={styles.btntxt}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deletebtn} onPress={() => deletetodo(index)}>
                        <Text style={styles.btntxt}>Delete </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.maincontainer}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 15 }}>Task Master App</Text>
            <View style={styles.inputcontainer}>
                <TextInput style={styles.txtinput} placeholder='Enter Your Todo' value={todo} onChangeText={setTodo} />
                <TouchableOpacity style={styles.addbtncontainer} onPress={addtodo}>
                    <Text style={styles.txtbtn}>{editTodo !== null ? "Update Todo" : "Add Todo"}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={allTodos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => renderItem(item, index)}
            />
        </View>
    )
}

export default TodoApp;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    inputcontainer: {
        margin: 30,
    },
    txtinput: {
        padding: 5.5,
        fontSize: 15,
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 10,
        shadowColor: "#00000093",
        elevation: 15
    },
    addbtncontainer: {
        marginTop: 20,
        backgroundColor: "dodgerblue",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "whitesmoke",
        elevation: 10
    },
    txtbtn: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15
    },
    itemcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "#fff",
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
        elevation: 10
    },
    btncontainer: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    editbtn: {
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 8
    },
    deletebtn: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 8
    },
    btntxt: {
        color: "#fff",
        fontWeight: 'bold',
    },
    itemtextcontainer: {
        flex: 1,
        marginRight: 10
    },
    itemtxt: {
        fontSize: 16,
        color: "#333",
        fontWeight: "500"
    }
})


