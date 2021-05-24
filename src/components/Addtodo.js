import React, { useState } from 'react';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

function Addtodo({ addTodo }) {

    const toast = useToast()

    function handleSubmit(e) {
        e.preventDefault();
        if (!content){
            toast({
                title: "No content.",
                status: "error",
                duration: 2000,
                isClosable: true,
              });
              return;
        }
        console.log(content);
        const todo = {
            id: nanoid(),
            body: content,
        };
        addTodo(todo);
        setContent('');
    }
    

    const [content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='8'>
                <Input variant='filled' placeholder='Add your todo item' value={content} onChange={ (e) => setContent(e.target.value)}/>
                <Button colorScheme="pink" px='8' type='submit'>Add Todo</Button>
            </HStack>
        </form>
    )
}

export default Addtodo;
