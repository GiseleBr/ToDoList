import { useState } from "react";
import { Task } from "../Tasks";
import { TaskList, Container, Content, Form } from "./styled";

export function Posts({ info }) {
    const [task, setTask] = useState([
      
    ])

    const [newTaskTxt, setNewTaskTxt] = useState('');

    function handleNewTask(event) { 
        setNewTaskTxt(event.target.value)
    }


    function handleCreateNewTask(event) { 
        event.preventDefault();

        const NewTask = {
            id: Math.random(),
            content: newTaskTxt,
        }

        setTask([...task, NewTask]);
        setNewTaskTxt('')

    }

    function deleteTask(id) {
        const taskWithoutDeletedOne = task.filter((task) => task.id !== id)

        setTask(taskWithoutDeletedOne);
    }

    return (
        <Container>
            <header>
                <img src={info.author.icon} />
                <strong>{info.author.name}</strong>
            </header>

            <Content>
                {
                    info.content.map(res => {
                        return (
                            <div key={res.id}>
                                <p>{res.post}</p>
                            </div>
                        )
                    })
                }
            </Content>

            <Form onSubmit={handleCreateNewTask}>
                <strong>Digite uma etapa a ser desenvolvida:</strong>
                <textarea
                    placeholder="Escreva aqui"
                    required
                    value={newTaskTxt}
                    onChange={handleNewTask}
                />

                <footer>
                    <button type="submit">Inserir</button>
                </footer>
            </Form>

            <TaskList>
                {task.map(task => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            onDeleteTask={deleteTask}
                        />
                    )
                })}
            </TaskList>


        </Container>
    )
}