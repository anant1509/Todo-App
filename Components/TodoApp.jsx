import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { SlideInRight } from 'react-native-reanimated';

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
            <Animated.View
                entering={SlideInRight.duration(500)}
                style={styles.itemcontainer}>
                <View style={styles.itemtextcontainer}>
                    <Text style={styles.itemtxt}>{item}</Text>
                </View>
                <View style={styles.btncontainer}>
                    <TouchableOpacity style={styles.editbtn} onPress={() => edittodo(index)}>
                        <Text style={styles.btntxt}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deletebtn} onPress={() => deletetodo(index)}>
                        <Text style={styles.btntxt}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        )
    }

    return (
        <View style={styles.maincontainer}>
            <View style={styles.headercontainer}>
                <Text style={styles.title}>📝 Task Master</Text>
            </View>
            <View style={styles.inputcontainer}>
                <TextInput
                    style={styles.txtinput}
                    placeholder='Add a new task...'
                    placeholderTextColor="#999"
                    value={todo}
                    onChangeText={setTodo}
                />
                <TouchableOpacity style={styles.addbtncontainer} onPress={addtodo}>
                    <Text style={styles.txtbtn}>{editTodo !== null ? "✓ Update" : "Add Task"}</Text>
                </TouchableOpacity>
            </View>
            {allTodos.length === 0 ? (
                <View style={styles.emptycontainer}>
                    <Text style={styles.emptytxt}>No tasks yet! 🎉</Text>
                    <Text style={styles.emptysubtxt}>Add your first task to get started</Text>
                </View>
            ) : (
                <FlatList
                    data={allTodos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    contentContainerStyle={styles.listcontainer}
                    showsVerticalScrollIndicator={false}

                />
            )}
        </View>
    )
}

export default TodoApp

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: "#f5f7fa",
    },
    headercontainer: {
        backgroundColor: "#1e5a96",
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        elevation: 8,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: "#fff",
        marginBottom: 8,
    },
    inputcontainer: {
        margin: 20,
        gap: 12,
    },
    txtinput: {
        padding: 14,
        fontSize: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e0e8f1",
        color: "#333",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
    },
    addbtncontainer: {
        backgroundColor: "#1e5a96",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        elevation: 5,
    },
    txtbtn: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 0.5,
    },
    itemcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 15,
        backgroundColor: "#fff",
        alignItems: 'center',
        padding: 15,
        borderRadius: 12,
        borderLeftWidth: 4,
        borderLeftColor: "#1e5a96",
        elevation: 3,
    },
    btncontainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    editbtn: {
        backgroundColor: '#4CAF50',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        elevation: 2,
    },
    deletebtn: {
        backgroundColor: '#FF6B6B',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        elevation: 2,
    },
    btntxt: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 13,
    },
    itemtextcontainer: {
        flex: 1,
        marginRight: 10
    },
    itemtxt: {
        fontSize: 16,
        color: "#2c3e50",
        fontWeight: "500",
        lineHeight: 22,
    },
    listcontainer: {
        paddingBottom: 20,
    },
    emptycontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    emptytxt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#1e5a96",
        marginBottom: 8,
        textAlign: 'center',
    },
    emptysubtxt: {
        fontSize: 14,
        color: "#999",
        textAlign: 'center',
    },
    checkbtn: {
        fontSize: 18,
        color: "#1e5a96",
        fontWeight: "bold"
    }
})

