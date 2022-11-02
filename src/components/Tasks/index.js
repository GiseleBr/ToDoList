import { Trash,  } from 'phosphor-react'
import { Container } from "./styled";

export function Task ({ task, onDeleteTask }) {

    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    return (
        <Container>
            <p>{task.content}</p>
            <div>
                
                <input type="checkbox"></input>
                <button onClick={handleDeleteTask} title="Deletar tarefa">
                    <Trash size={24} />
                  
            </button>
            </div>  
        </Container>
    )
}