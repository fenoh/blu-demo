import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Block1.css'
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Block1() {
    return (
    <div className='block-1'>
        <div className='left-bar'>
            <img src='fb.png' style={{
            width: '18px'
            }}/>
            <img src='youtube.png'/>
            <img src='x.png'/>
            <img src='insta.png'/>
        </div>
        <div className='center-content'>
            <div className='header'>
                <img src='blu.png' width={'100px'}/>
                <nav class='text-white'>
                    <ul>
                    <li>Accueil</li>
                    <li>À propos</li>
                    <li>Visites</li>
                    <li className='reserved'>Réservé</li>
                    </ul>
                </nav>
            </div>
            <div className='text-white'>
                <h1>
                    <span className='main'>Votre évasion</span><br/>
                    <span className='secondary'>sur la Côte d’Azur !</span>
                </h1>
                <p className='description'>Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une destination d’exception nichée entre Cannes et Saint-Tropez. Nos appartements tout équipés, situés dans un domaine privé sécurisé, offrent un cadre verdoyant et paisible, à quelques pas de la marina de Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez d’un séjour alliant confort, sérénité et élégance au cœur de la Riviera française&nbsp;!</p>
                <div className='d-flex justify-content-between align-items-end'>
                    <Button className='rsvp w-10 h-50 d-flex justify-content-between'>
                        Réservez dès maintenant votre séjour !
                        <span className="d-flex justify-content-center align-items-center rounded-circle border border-white text-white ms-2" style={{ width: "30px", height: "30px" }}>
                            <i className="bi bi-chevron-right"></i>
                        </span>
                    </Button>
                    <div className="d-flex flex-row-reverse position-absolute end-0" style={{ bottom: "100px" }}>
                        <div className="position-relative">
                            <img src="piscine2.png" className="piscine" />
                            <span
                                className="d-flex justify-content-center align-items-center rounded-circle border border-white text-white position-absolute"
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
                        <img src='piscine1.png' className='piscine p-2'/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}