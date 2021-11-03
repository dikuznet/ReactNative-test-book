import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, FlatList, Image, Alert } from 'react-native'
import { AddToDo } from './src/AddToDo'
import { Navbar } from './src/navbar' 
import { ToDo } from './src/ToDo'

export default function App() {
 const [todos, setTodos] = useState([
   {id: 1, title: 'test1'},
   {id: 2, title: 'test1'},
   {id: 3, title: 'test1'},
   {id: 4, title: 'test1'},
   {id: 5, title: 'test1'},
   {id: 6, title: 'test1'},
   {id: 7, title: 'test1'},
   {id: 8, title: 'test1'},
   {id: 9, title: 'test1'},
 ])
 const addToDo = (title) => {
  setTodos(prev => [
    ...prev, {
    id: Date.now().toString(),
    title: title
  }])
  
 }
 
 const getPage = () => 
 {
  Alert.alert("Название дела не может быть пустым"); 
  // fetch('http://192.168.77.100:5000/vars', {
  //   method: 'POST',
  //   headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
  //   }).then((response) => response.json())
  // .then((responseData) => {
  //       console.log(responseData);
  //   })
 }

 useEffect(() => {
  const interval = setInterval(() => {
    console.log('This will run every second!!!');     
  }, 5000);
  return () => clearInterval(interval);
  }, []);
  
 const removeToDo = (id) =>
 {
  setTodos(prev => prev.filter(todo => todo.id !== id))
 }

 return (
 <View style={styles.container}> 
  
  <Button title = "Get!" onPress={getPage} />
  
  <Navbar title="CAT'S TEST"/>
  <AddToDo onSubmit = {addToDo} />
  
  <FlatList
   keyExtractor={item => item.id.toString()}
   data={todos}
   renderItem={({ item }) => <ToDo todo={item} onRemove={removeToDo} />} 
   />

  <Image
        style={styles.tinyLogo}
        source={require('./res/cat.png')}
      />
 </View>
)
}

const styles = StyleSheet.create({
    container: {}
})
  