import './Block3.css'

export default function Block3() {
    return (
        <div className='block3'>
            <div className='d-flex justify-content-center text-white pt-5'>
                <div className="text-center" style={{ maxWidth: '900px' }}>
                    <h2>
                        <p>Saint Raphaël, l’endroit parfait pour</p>
                        <b>vivre la Côte d’Azur</b> 
                    </h2>
                    <p>Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages, Saint-Raphaël est une destination 
                        de rêve. Entre mer turquoise et rochers rouges de l’Estérel, elle offre un cadre idyllique pour la détente et l’aventure.</p>
                </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap text-center p-5" style={{ marginTop: '50px' }}>
                <div className="text-white mb-4 text-center" style={{ width: '200px', margin: '0 auto' }}>
                    <div className="circle bg-white d-flex justify-content-center align-items-center mb-2">
                        <img src='swimming.png' className='circle-img' />
                    </div>
                    <p><b>Sports nautiques, plongée, voile</b></p>
                </div>

                <div className="text-white mb-4 text-center" style={{ width: '200px', margin: '0 auto' }}>
                    <div className="circle bg-white d-flex justify-content-center align-items-center mb-2">
                         <img src='city.png' className='circle-img' />
                    </div>
                    <p><b>Randonnées et vélo dans l’Estérel</b></p>
                </div>

                <div className="text-white mb-4 text-center" style={{ width: '200px', margin: '0 auto' }}>
                    <div className="circle bg-white d-flex justify-content-center align-items-center mb-2">
                        <img src='casino.png' className='circle-img' />
                    </div>
                    <p><b>Casino et vie nocturne animée</b></p>
                </div>

                <div className="text-white mb-4 text-center" style={{ width: '200px', margin: '0 auto' }}>
                    <div className="circle bg-white d-flex justify-content-center align-items-center mb-2">
                        <img src='village.png' className='circle-img' />
                    </div>
                    <p><b>Villages perchés et marchés provençaux</b></p>
                </div>

                <div className="text-white mb-4 text-center" style={{ width: '200px', margin: '0 auto' }}>
                    <div className="circle bg-white d-flex justify-content-center align-items-center mb-2">
                        <img src='golf.png' className='circle-img'/>
                    </div>
                    <p><b>Un paradis pour les golfeurs</b></p>
                </div>

                <div className="text-white mb-4 text-center" style={{ width: '200px', margin: '0 auto' }}>
                    <div className="circle bg-white d-flex justify-content-center align-items-center mb-2">
                        <img src='montagne.png' className='circle-img' />
                    </div>
                    <p><b>Montagne et vélo de route</b></p>
                </div>
            </div>
            <div className='d-flex justify-content-center pt-5' style={{ marginTop: '90px' }}>
                <div className="text-white text-center" style={{ maxWidth: '900px' }}>
                    <p>Flânez sur la Promenade des Bains, explorez les criques secrètes ou partez en mer depuis son port de plaisance. Saint-Raphaël, c’est la Côte d’Azur dans toute sa splendeur !</p>
                </div>
            </div>
        </div>
    )
}