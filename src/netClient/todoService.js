import http from '@/netClient/config';
export async function fetchTodoList() {
    try {
        const responce = await http.get('/todos');
        return responce.data.todos || [];
    } catch (error) {
        console.error({ error })
        throw error;
    }
}

export async function patchTodo({
    id,
    isDone
}) {
    try {
        const response = await http.patch('/todos/' + id, { isDone })
        return response.data
    } catch (error) {
        console.error({ error })
    }
}

export async function createTodo({ title, description }) {
    try {
        const response = await http.post('/todos/', { title, description })
        return response.data

    } catch (error) {
        console.warn({ error })
    }
}

export async function deleteTodo({ id }) {
    try {
        const responce = await http.delete('/todos/' + id)
        return responce.data
    } catch (error) {
        console.warn({ error })
    }
}

export async function deleteAllTodo() {
    try {
        const responce = await http.delete('/todos/')
        return responce.data.todos || [];
    } catch (error) {
        console.warn({ error })
    }
}