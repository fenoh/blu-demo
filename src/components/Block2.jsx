import './Block2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Block2() {
    return (
        <div className='block-2 d-flex justify-content-between mt-5 pt-5'>
            <div>
                <h2>
                    <span className='main'>Le confort et la sérénité d’un </span>
                    <br/>
                    <span className='p-2'>appartement privé</span>
                </h2>
                <p className='description p-2'>
                Blu Azur vous propose des appartements élégants et spacieux, conçus pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et moderne, ils sont parfaits pour une escapade détente ou un séjour prolongé.
                </p>

                <div className='inclusions pt-5'>
                    <p>Les inclusions :</p>
                    <ul>
                        <li>Stationnement privé</li>
                        <li>Piscine extérieure avec chaises longues</li>
                        <li>Linge de lit et serviettes</li>
                        <li>Télévision, téléphone et Wi-Fi (accès au salon)</li>
                        <li>Réfrigérateur, cuisinière, lave-vaisselle, vaisselle</li>
                        <li>Kit bébé: comprend un lit parapluie avec un vrai matelas et une chaise haute</li>
                        <li>Autres commodités en prêt à la réception: jeux de société, livres, raquettes et balles de ping-pong, sèche-cheveux, fer et planche à repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants.</li>
                    </ul>
                </div>
            </div>
            <div className="position-relative" style={{ height: "100vh" }}>
                <div className='d-flex flex-row-reverse position-absolute end-0 align-items-center' style={{ top: "10%" }}>
                    <div className="position-relative">
                        <img src='Cuisine.png' className='image'/>
                        <span className="d-flex justify-content-center align-items-center rounded-circle border border-white text-white position-absolute"
                            style={{
                                width: "30px",
                                height: "30px",
                                top: "50%",         
                                transform: "translateY(-50%)", 
                                right: "10px",  
                                }}
                        >
                            <i className="bi bi-chevron-right"></i>
                        </span>
                    </div>
                    <img src='salon.png' className='image2 p-2'/>
                    
                </div>
            </div>

        </div>
    )
}