import { useState } from "react"


export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [toggle, setToggle] = useState(1)
    const tabs = [
        {
            id: 1,
            title: "Name"
        },
        {
            id: 2,
            title: "Email"
        },
        {
            id: 3,
            title: "Password"
        },
    ]
    const submitForm = () => {

    }
    return (
        <>
            <h2 className="text-center m-2 font-bold text-3xl text-gray-600">
            Login Form
            </h2>
            <ul className="flex gap-2 w-full items-center justify-center py-4">
                {
                    tabs.map(tab => (
                        <li onClick={() => setToggle(tab.id)}
                            className={`border shadow cursor-pointer transition-all py-2 px-2 rounded-xl w-[100px] text-center font-bold text-xl
                          ${tab.id === toggle && "bg-gray-600 text-white"}`}>
                            {tab.title}
                        </li>
                    ))
                }
            </ul>
            <form >
                <div className={`w-full flex items-center justify-center  ${toggle === 1 ? "block" : "hidden"}`}>
                    <div className="group relative  flex flex-col justify-center items-center gap-8 font-bold text-xl">
                        <div className="bg-blue-50 w-full rounded-xl overflow-hidden shadow-xl border flex items-center justify-between p-2 ">
                            <input
                                placeholder="Enter Your Name"
                                value={name} onChange={(e) => setName(e.target.value)}
                                id="1" type="text"
                                className="peer w-full bg-transparent p-2  outline-none" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                className="w-7 h-7 text-green-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <button className="bg-green-600  px-4 py-2 rounded-xl text-white flex items-end gap-2 group" onClick={() => setToggle(toggle + 1)}>
                            <span>Next Level</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                className="w-6 h-6 group-hover:translate-x-1 transition-all">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`w-full flex items-center justify-center  ${toggle === 2 ? "block" : "hidden"}`}>
                    <div className="group relative  flex flex-col justify-center items-center gap-8 font-bold text-xl">
                        <div className="bg-blue-50 w-full rounded-xl overflow-hidden shadow-xl border flex items-center justify-between p-2 ">
                            <input
                                placeholder="Enter Your Email"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                id="1" type="text"
                                className="peer w-full bg-transparent p-2  outline-none" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                             className="w-7 h-7 text-green-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <button className="bg-green-600  px-4 py-2 rounded-xl text-white flex items-end gap-2 group" onClick={() => setToggle(toggle + 1)}>
                            <span> Next Level</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                className="w-6 h-6 group-hover:translate-x-1 transition-all">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`w-full flex items-center justify-center  ${toggle === 3 ? "block" : "hidden"}`}>
                    <div className="group relative flex flex-col justify-center items-center gap-8 font-bold text-xl">
                        <div className="bg-blue-50 w-full rounded-xl overflow-hidden shadow-xl border flex items-center justify-between p-2 ">
                            <input
                                placeholder="Enter Your Password"
                                value={pass} onChange={(e) => setPass(e.target.value)}
                                id="1" type="text"
                                className="peer w-full bg-transparent p-2  outline-none" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                className="w-7 h-7 text-green-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>
                        <button className="bg-green-600  px-4 py-2 rounded-xl text-white flex items-end gap-2 group" onClick={submitForm}>
                            <span>
                                {
                                    toggle === 3 && "Submit Form"
                                }
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                className="w-6 h-6 group-hover:translate-x-1 transition-all">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
