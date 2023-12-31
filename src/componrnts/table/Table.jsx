import { useEffect, useState } from "react"


export default function Table() {
    const todos = [
        {
            "id": 1,
            "title": "learn js",
            "completed": true
        },
        {
            "id": 2,
            "title": "learn react",
            "completed": true
        },
        {
            "id": 3,
            "title": "learn HTML5",
            "completed": false
        },
        {
            "id": 4,
            "title": "learn CSS3",
            "completed": true
        },
        {
            "id": 5,
            "title": "learn next js",
            "completed": false
        },
    ]
    const [filtredTodods, setFiltredTodos] = useState(todos)
    const [serchBoxValue, setSerchBoxValue] = useState("")
    const [showEditModal, setShowEditModal] = useState(false)

    const [updateInputValue, setUpdateInputValue] = useState("")
    const [id, setId] = useState()
    const [todoWantUpdated, setTodoWantUpdated] = useState()



    const filterTodoHandler = (e) => {
        if (e.target.value === "completed") {
            let completedTodos = todos
            setFiltredTodos(completedTodos.filter(todo => todo.completed === true))
        } else if (e.target.value === "unCompleted") {
            let unCompletedTodos = todos
            setFiltredTodos(unCompletedTodos.filter(todo => todo.completed === false))
        } else if (e.target.value === "all") {
            setFiltredTodos(todos)
        }
    }

    const serchHandler = () => {
        let matchs = filtredTodods.filter(item => item.title.includes(serchBoxValue))
        setFiltredTodos(matchs)
    }

    const removeTodoHandler = (id) => {
        setFiltredTodos(filtredTodods.filter(todo => todo.id !== id))
    }

    const doTodoHandler = (id) => {
        setShowEditModal(!showEditModal)
        setId(id)
        setTodoWantUpdated(filtredTodods.find(todo => todo.id == id).title)
    }
    const updateHandler = () => {
        setShowEditModal(!showEditModal)
        let complet = filtredTodods.find(item => item.id == id)
        complet.title = updateInputValue
    }

    return (
        <>
            <div className="w-full p-4 mt-24 mb-12 flex flex-col  items-center justify-center">
                <div className={`${showEditModal ? "block" : "hidden"} w-[400px] h-[350px] bg-red-300 absolute border border-4  border-green-500 rounded`}>
                    <h3 >
                        {todoWantUpdated}
                    </h3>
                    <input type="text" value={updateInputValue} onChange={e => setUpdateInputValue(e.target.value)} />
                    <button className="bg-blue-500 p-1" onClick={updateHandler}>update</button>
                </div>
                <div>
                    <h2 className="text-center m-4 font-bold text-3xl text-gray-600">
                        Table List
                    </h2>
                    <div className="flex items-center gap-12 sm:flex-col sm:gap-4">
                        <select onChange={(e) => filterTodoHandler(e)} className="w-[200px] p-2 bg-blue-50 font-bold w-full rounded-xl overflow-hidden shadow-xl border flex items-center justify-between p-2 " >
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="unCompleted">Not Completed</option>
                        </select>
                        <div className="bg-blue-50 font-bold w-full rounded-xl overflow-hidden shadow-xl border flex items-center justify-between p-2 ">
                            <input
                                onChange={(e) => setSerchBoxValue(e.target.value)}
                                placeholder="What Do You Want ?"
                                id="1" type="text"
                                className="peer w-full bg-transparent p-2  outline-none" />
                            <svg
                                onClick={serchHandler}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="cursor-pointer border border-green-500 p-1 rounded-md text-green-500 w-9 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <div className="w-[200px] p-2 bg-blue-50 font-bold w-full rounded-xl overflow-hidden shadow-xl border flex items-center justify-center gap-2">
                            <span>Count:</span>
                            <span>{filtredTodods.length}</span>
                        </div>
                    </div>
                </div>
                <table className="w-full mt-8">
                    <thead className="bg-gray-600 text-white ">
                        <tr className="flex gap-12 text-center justify-around p-2">
                            <th>Actions</th>
                            <th>Status</th>
                            <th>Title</th>
                            <th>id</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col gap-4 mt-2 sm:text-sm">
                        {
                            filtredTodods.map(todo => (
                                <tr key={todo.id} className={`${todo.completed ? "bg-white" : "bg-gray-100 opacity-45 "} border border-gray-600 flex items-end gap-12 text-center justify-around p-1 hover:bg-gray-200 transition`}>
                                    <th className="flex items-center gap-2">
                                        <div
                                            onClick={() => removeTodoHandler(todo.id)}
                                            className="text-red-500 p-1 rounded cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 sm:w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                            </svg>
                                        </div>
                                        <div
                                            onClick={() => doTodoHandler(todo.id)}
                                            className="text-green-500 p-1 rounded cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 sm:w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </div>
                                    </th>
                                    <th>{todo.completed ? (
                                        <div className="flex gap-1">
                                            <span>Completed</span>
                                            <span class="relative flex h-2 w-2">
                                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                        </div>
                                    ) : (
                                        <span>Not Completed</span>
                                    )}</th>
                                    <th >{todo.title}</th>
                                    <th className="text-gray-500 w-[4%] sm:w-min">{todo.id}</th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}