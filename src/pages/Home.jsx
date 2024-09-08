import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div className="landingPage">
            <div className='home'>
                <span>Lucie & Petr</span>
                <h1>Budeme se brát.</h1>
            </div>
            <div class='copyright'>
                <a href='https://www.terezachudejova.cz/' target='_isBlank'><p>© Tereza Chudějová, 2024</p></a>
            </div>
        </div>
    )
}