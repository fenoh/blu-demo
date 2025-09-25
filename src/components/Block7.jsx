import './Block7.css'
import { Button } from 'react-bootstrap'

export default function Block7() {
    return (
        <div className='block7'>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="text-center text-white" style={{ width: '1000px' }}>
                    <h1>Réservations</h1>
                    <p style={{fontSize: '25px'}}>
                    <b>Offrez-vous un séjour inoubliable </b>
                    dans l’un de nos appartements Blu Azur. Profitez d’un cadre exceptionnel, entre confort, détente et découvertes, au cœur de Saint-Raphaël.
                    </p>
                    <Button className="btn-Map w-500 d-flex justify-content-between align-items-center text-white" style={{ fontSize: '20px', backgroundColor:'#4097FF', width:'600px', marginLeft: '200px' }}>
                        Consulter la liste des meilleurs restaurants
                        <span className="d-flex justify-content-center align-items-center rounded-circle border border-white text-white ms-2" style={{ width: "30px", height: "30px" }}>
                            <i className="bi bi-chevron-right"></i>
                        </span>
                    </Button>
                </div>
            </div>

        </div>
    ) 
    }