import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Alert,
  Keyboard,
} from 'react-native';
const Todo = () => {
  const [todos, setTodos] = useState([
    {id: 1, task: 'First Task', completed: true},
    {id: 2, task: 'Second Task', completed: false},
  ]);
  const [textInput, setTextInput] = useState('');
  const ListItem = ({todo}) => {
    return (
      <View style={styles.ListItems}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.task}
          </Text>
        </View>
        {!todo?.completed && (
          <TouchableOpacity
            style={[styles.actionIcon]}
            onPress={() => checkTodo(todo?.id)}>
            <Image
              source={require('./checkmark.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => DeleteTodo(todo?.id)}>
          <Image
            source={require('./trash.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const addTodo = () => {
    Keyboard.dismiss();
    if (textInput == '') {
      Alert.alert('Error', 'Please Enter ToDo First');
    } else {
      const newToDo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newToDo]);
      setTextInput('');
    }
  };
  const checkTodo = todoId => {
    const newTodo = todos.map(item => {
      if (item.id == todoId) {
        return {...item, completed: true};
      }
      return item;
    });
    setTodos(newTodo);
  };
  const DeleteTodo = todoId => {
    const newtoDo = todos.filter(item => item.id != todoId);
    setTodos(newtoDo);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={{paddingLeft: 80, fontSize: 38}}>To Do App</Text>
      </View>
      <FlatList
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add Todo"
            value={textInput}
            onChangeText={text => setTextInput(text)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.inputContainer}>
            <Text style={{marginTop: 12, fontSize: 20}}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    elevation: 40,
    flex: 1,
    height: 50,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
    borderRadius: 25,
    justifyContent: 'center',
    elevation: 40,
    alignItems: 'center',
  },
  ListItems: {
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: 'green',
    borderRadius: 5,
    backgroundColor: 'green',
    marginRight: 10,
  },
});

export default Todo;
