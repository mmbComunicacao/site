import iconWorkers from '../../../images/workers.svg';
import './styles.css';

export function Informatives() {
    return (
        <div className='informative_box'>
            <div>
                <div>
                    <h2>Olá, Colaborador</h2>
                    <p>You have 16 new applications. It is a lot of work for today! So let's start 😎.</p>
                </div>
                <a href="#">review it!</a>
            </div>
            <div className='informative'>
                <img src={iconWorkers} alt="Workers" id="icon-workers" />
            </div>
        </div>
    )
}