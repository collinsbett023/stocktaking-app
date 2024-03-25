import { Link } from 'react-router-dom'
import '../css/Home.css'

function Home() {
    return (
        <div className='homepage'>
            <div className='homepage-elements-container'>
                <p>Welcome to the stocktaking app</p>
                <Link
                    to={'/login'}
                    className='link'
                >
                    Log In
                </Link>
                <Link
                    to={'/signup'}
                    className='link'
                >
                    Sign Up
                </Link>
            </div>
        </div>
    )
}

export default Home
