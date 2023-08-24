import styles from './Home.module.css'

const Home = () => {
    return (
        <div>
            <h1>Car catalog</h1>
            <div className={styles.image}>
                <div className={styles.item}
                    style={{
                    backgroundImage: 'url(/1.jpg)',
                }}/>
                <div>
                    <h2>Car 1</h2>
                    <p>$100 000</p>
                    <button>Read more</button>
                </div>

            </div>
        </div>)
}
export default Home
