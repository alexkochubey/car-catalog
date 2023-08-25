import styles from "../Home.module.css";

function CarItem({ car }) {
    return <div key={car.id} className={styles.item}>
        <img src={car.image} className={styles.image}/>
        <div style={{
            backgroundImage: 'url(/1.jpg)',
        }}/>
        <div className={styles.info}>
            <h2>{car.name}</h2>
            <p>{new Intl.NumberFormat(
                'en-US', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'narrowSymbol'
                }).format(car.price)}</p>
            <button>Read more</button>
        </div>
    </div>
}

export default CarItem