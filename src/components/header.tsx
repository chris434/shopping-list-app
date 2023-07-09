export function Header() {
    return <header className="bg-teal-500 p-5 flex gap-5 sticky items-center shadow-2xl">
        <h1 className="text-white text-2xl">Shopping list</h1>
        <nav className="flex gap-5">
           <button className="text-white border-2 border-white p-2">+ new</button>
        </nav>
    </header>
}