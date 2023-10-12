import styles from './home.module.css'
import { Link } from 'react-router-dom'
export function Home (){
    return(
        <div className={styles.container}>
            <h1>Página Home</h1>
        <Link to='/detail'>
            <h1>Página de detalhes</h1>
        </Link>
        </div>
    )
}