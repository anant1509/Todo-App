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
                <Text style={styles.itemtxt}>{item}</Text>
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

export default TodoApp

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
        gap: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    editbtn: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10
    },
    deletebtn: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 10
    },
    btntxt: {
        color: "#fff",
        fontWeight: 'bold',
    },
    itemtxt: {
        fontSize: 18,
        fontWeight: "500"
    }

})

// import React, { useState } from 'react';
// import {
//     Alert,
//     FlatList,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from 'react-native';

// const TodoApp = () => {
//     const [todo, setTodo] = useState("");
//     const [allTodos, setAlltodos] = useState([]);
//     const [editTodo, setEdittodo] = useState(null);

//     const addtodo = () => {
//         if (todo.trim() === "") {
//             return Alert.alert("Empty Task", "Please enter a task to continue.");
//         }
//         if (editTodo !== null) {
//             const updatetodos = [...allTodos];
//             updatetodos[editTodo] = todo;
//             setAlltodos(updatetodos);
//             setEdittodo(null);
//         } else {
//             setAlltodos([...allTodos, todo]);
//         }
//         setTodo("");
//     };

//     const edittodo = (index) => {
//         setTodo(allTodos[index]);
//         setEdittodo(index);
//     };

//     const deletetodo = (index) => {
//         const updateedtodo = allTodos.filter((_, i) => i !== index);
//         setAlltodos(updateedtodo);
//     };

//     const renderItem = (item, index) => (
//         <View style={styles.itemcontainer}>
//             <View style={styles.textWrapper}>
//                 <Text style={styles.itemtxt}>{item}</Text>
//             </View>
//             <View style={styles.btncontainer}>
//                 <TouchableOpacity
//                     style={[styles.actionBtn, styles.editbtn]}
//                     onPress={() => edittodo(index)}
//                 >
//                     <Text style={styles.btntxt}>Edit</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={[styles.actionBtn, styles.deletebtn]}
//                     onPress={() => deletetodo(index)}
//                 >
//                     <Text style={styles.btntxt}>Delete</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );

//     return (
//         <View style={styles.maincontainer}>
//             <View style={styles.header}>
//                 <Text style={styles.headerTitle}>Task Master</Text>
//                 <Text style={styles.headerSubtitle}>Stay organized, stay productive.</Text>
//             </View>

//             <View style={styles.inputSection}>
//                 <TextInput
//                     style={styles.txtinput}
//                     placeholder="Enter Your Daily Task"
//                     placeholderTextColor="#999"
//                     value={todo}
//                     onChangeText={setTodo}
//                 />
//                 <TouchableOpacity
//                     style={[styles.addbtncontainer, editTodo !== null && styles.updateBtn]}
//                     onPress={addtodo}
//                 >
//                     <Text style={styles.txtbtn}>
//                         {editTodo !== null ? "Update Task" : "Add Task"}
//                     </Text>
//                 </TouchableOpacity>
//             </View>

//             <FlatList
//                 data={allTodos}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item, index }) => renderItem(item, index)}
//                 contentContainerStyle={styles.listContent}
//                 ListEmptyComponent={
//                     <Text style={styles.emptyText}>No tasks yet. Start by adding one!</Text>
//                 }
//             />
//         </View>
//     );
// };

// export default TodoApp;

// const styles = StyleSheet.create({
//     maincontainer: {
//         flex: 1,
//         backgroundColor: "#F8F9FA", // Light grey professional background
//     },
//     header: {
//         paddingTop: 60,
//         paddingBottom: 20,
//         paddingHorizontal: 20,
//         backgroundColor: '#87cefa',
//         borderBottomLeftRadius: 30,
//         borderBottomRightRadius: 30,
//         elevation: 4,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 10,
//     },
//     headerTitle: {
//         fontSize: 28,
//         fontWeight: '800',
//         color: '#1A1A1A',
//     },
//     headerSubtitle: {
//         fontSize: 14,
//         color: '#000000ff',
//         marginTop: 4,
//     },
//     inputSection: {
//         padding: 20,
//     },
//     txtinput: {
//         backgroundColor: "#fff",
//         padding: 16,
//         borderRadius: 15,
//         fontSize: 16,
//         color: '#333',
//         elevation: 3,
//         shadowColor: "#000",
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//     },
//     addbtncontainer: {
//         marginTop: 15,
//         backgroundColor: "#4CAF50",
//         padding: 16,
//         borderRadius: 15,
//         alignItems: "center",
//         elevation: 5,
//     },
//     updateBtn: {
//         backgroundColor: "#2196F3",
//     },
//     txtbtn: {
//         color: "#fff",
//         fontWeight: '700',
//         fontSize: 16,
//         letterSpacing: 0.5,
//     },
//     listContent: {
//         paddingBottom: 30,
//     },
//     itemcontainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginVertical: 8,
//         marginHorizontal: 20,
//         backgroundColor: "#fff",
//         alignItems: 'center',
//         padding: 16,
//         borderRadius: 15,
//         elevation: 2,
//         shadowColor: "#000",
//         shadowOpacity: 0.05,
//         shadowRadius: 5,
//     },
//     textWrapper: {
//         flex: 1,
//         marginRight: 10,
//     },
//     itemtxt: {
//         fontSize: 16,
//         color: "#333",
//         fontWeight: "500",
//     },
//     btncontainer: {
//         flexDirection: 'row',
//         gap: 8,
//     },
//     actionBtn: {
//         paddingVertical: 8,
//         paddingHorizontal: 12,
//         borderRadius: 10,
//     },
//     editbtn: {
//         backgroundColor: '#04ff19ff', // Light green background
//     },
//     deletebtn: {
//         backgroundColor: '#ff0026de', // Light red background
//     },
//     btntxt: {
//         fontSize: 12,
//         fontWeight: '700',
//         color: 'white', // Darker green text
//     },
//     emptyText: {
//         textAlign: 'center',
//         marginTop: 50,
//         color: '#999',
//         fontSize: 16,
//     },
// });