import {cars} from './cars.data.js'
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";

const Home = () => {

    return (
        <div>
            <h1>Car catalog</h1>
            <CreateCarForm/>
            <div>
                {cars.length ? cars.map(car => (
                    <CarItem key={car.id} car = {car}/>
                ))
                : <p>There are no cars</p>
                }
            </div>
        </div>)
}
export default Home
