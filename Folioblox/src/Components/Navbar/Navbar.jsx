
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-[70px] px-16 py-8">
            <div className="text-white/70 text-2xl font-nunito">
                Folioblox
            </div>
            <div className="flex list-none gap-12 text-white items-center text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <button className="bg-white text-black px-6 py-2 
                rounded-3xl text-sm font-bold">
                    GetInTouch</button>
            </div>
        </nav>
    )
}

export default Navbar