import './Block4.css'
import { Button } from 'react-bootstrap'

export default function Block3() {
    return (
        <div className='block4 d-flex justify-content-between mt-5 pt-5'>
            <div className='p-5 textRight'>
                <h2>
                Où se trouve Blu Azur à <br/>
                <b>Saint-Raphaël ?</b>
                </h2>
                <p className='pt-5'>
                Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de l’une des plus belles stations balnéaires de France. Nos appartements se trouvent dans un domaine privé sécurisé, entouré de verdure, à quelques minutes à pied de la plage sablonneuse de Santa Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la résidence permet un accès facile aux boutiques, restaurants et animations locales. Une station d’arrêt d’autobus est située à la sortie du site, facilitant les déplacements, et une boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.
                </p>
                <Button className='btn-Map w-10 d-flex justify-content-between'>
                    Comment s’y rendre ?
                    <span className="d-flex justify-content-center align-items-center rounded-circle border border-primary text-primary ms-2" style={{ width: "30px", height: "30px" }}>
                        <i className="bi bi-chevron-right"></i>
                    </span>
                </Button>
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <img src='mapImg.png' className='mapImg' style={{ display: 'block' }} />
                <img 
                    src='map.png' 
                    style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100px',
                    height: '100px',
                    margin: '60px'
                    }}
                />
            </div>


        </div>
    )
}