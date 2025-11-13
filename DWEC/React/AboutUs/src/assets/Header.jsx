export default function Header(){
    return(
        <header style={{backgroundColor: 'red'}}>
            <h1 style={{color: 'white'}}>Prueba Links</h1>
            <nav>
                <Link path='home' element={Home}></Link>
                <Link path='about' element={About}></Link>
            </nav>
        </header>
    )
}