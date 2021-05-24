import React, { useState, useEffect } from 'react';
import { Heading, VStack, IconButton,useColorMode } from '@chakra-ui/react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/Addtodo'
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {

const [todos, setTodos] = useState(
  () => JSON.parse(localStorage.getItem('todos')) || []
);

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

function deleteTodo(id) {
  const newTodos = todos.filter(todo => {
    return todo.id !== id
  });

setTodos(newTodos);
}

function addTodo(todo) {
  setTodos([...todos, todo])
}

const { colorMode, toggleColorMode } = useColorMode()

  return (
      <VStack p={4}>
        <IconButton icon={ colorMode ==='light' ? <FaSun /> : <FaMoon />} isRound='true' size='md' alignSelf='flex-end' onClick={toggleColorMode}/>
        <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient="linear(to-r, pink.500, pink.100, pink.300)" bgClip="text">To Do List</Heading>
        <ToDoList todos={ todos } deleteTodo={ deleteTodo } />
        <AddToDo addTodo={ addTodo } />
      </VStack>
  );
}

export default App;
