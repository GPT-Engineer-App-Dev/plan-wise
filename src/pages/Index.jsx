import { useState } from 'react';
import { Box, Button, Container, Flex, Input, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: input, isCompleted: false }]);
      setInput('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleCompleteTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <Container maxW="container.md" py={8}>
      <Flex as="nav" justifyContent="space-between" mb={8}>
        <Text fontSize="2xl" fontWeight="bold">Todo App</Text>
      </Flex>
      <Box bg={useColorModeValue('gray.100', 'gray.700')} p={8} borderRadius="lg" boxShadow="base">
        <Flex mb={4}>
          <Input
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          />
          <Button onClick={handleAddTask} ml={2} colorScheme="blue">Add</Button>
        </Flex>
        <List spacing={3}>
          {tasks.map(task => (
            <ListItem key={task.id} display="flex" justifyContent="space-between" alignItems="center">
              <Text as={task.isCompleted ? 's' : 'span'}>{task.text}</Text>
              <Flex>
                <Button onClick={() => handleCompleteTask(task.id)} size="sm" colorScheme={task.isCompleted ? 'gray' : 'green'}>
                  <FaCheckCircle />
                </Button>
                <Button onClick={() => handleDeleteTask(task.id)} size="sm" colorScheme="red" ml={2}>
                  <FaTrash />
                </Button>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Index;