import './Block6.css'
import { Button } from 'react-bootstrap'

export default function Block6() {
    return (
        <div className="block6">
            {/* Ligne du haut */}
            <div className="top-row">
                <div className="block61 text-white d-flex flex-column justify-content-end p-3">
                    <div className='p-3'>
                        <h3 style={{fontSize: '20px'}}>Un patrimoine culturel <br/> d’exception</h3>
                        <p style={{fontSize: '12px'}}>De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.</p>
                        <p style={{fontSize: '12px'}}>
                            À voir: 
                            <u style={{color: 'blue'}}> Le Festival de Cannes, Carnaval de Nice, Fête du Citron</u>
                        </p>
                    </div>
                </div>
                <div className="block62 text-white d-flex flex-column justify-content-end p-3">
                    <div className='p-3 pt-5'>
                        <h3 style={{fontSize: '20px'}}>Le sport au rythme de la Méditerranée</h3>
                        <p style={{fontSize: '12px'}}>Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d’adrénaline.  </p>
                        <p style={{fontSize: '12px'}}>
                            À voir: 
                            <u style={{color: 'blue'}}> Grand prix de Monaco, Ironman France - Nice, Marathon des Alpes-Maritimes, Régates de Saint-Tropez</u>
                        </p>
                    </div>
                </div>
            </div>

            {/* Ligne du bas */}
            <div className="bottom-row">
                <div className="block63 text-white d-flex flex-column justify-content-end pt-5">
                    <div className='p-3 pt-5'>
                        <h3 style={{fontSize: '20px'}}>Une destination gourmande <br/>et authentique</h3>
                        <p style={{fontSize: '12px'}}>Les marchés provençaux dévoilent des saveurs du terroir, entre fromages affinés, huile d’olive et spécialités méditerranéennes. Vignerons passionnés et restaurants raffinés offrent une expérience gastronomique où tradition et créativité se rencontrent dans un cadre enchanteur.
                        </p>
                        <Button className='btn-Map w-10 d-flex justify-content-between' style={{fontSize: '12px'}}>
                                Consulter la liste des meilleurs restaurants
                            <span className="d-flex justify-content-center align-items-center rounded-circle border border-primary text-primary ms-2" style={{ width: "30px", height: "30px" }}>
                                <i className="bi bi-chevron-right"></i>
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="block64 text-white d-flex flex-column justify-content-end p-3">
                    <div className='p-3'>
                        <h3 style={{fontSize: '20px'}}>Des expériences inoubliables  <br/>en famille</h3>
                        <p style={{fontSize: '12px'}}>Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose un cadre idéal pour partager des moments inoubliables. La diversité des activités en plein air fait de la région une destination prisée par les amateurs de découvertes et d’aventures en famille.</p>
                        
                    </div>
                </div>
                <div className="block65 text-white d-flex flex-column justify-content-end pt-5">
                    <div className='p-3 pt-5'>
                        <h3 style={{fontSize: '20px'}}>L’évasion en pleine nature</h3>
                        <p style={{fontSize: '12px'}}>Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps.</p>
                        <Button className='btn-Map w-10 d-flex justify-content-between' style={{fontSize: '12px'}}>
                        Consulter la liste des sentiers pédestres
                            <span className="d-flex justify-content-center align-items-center rounded-circle border border-primary text-primary ms-2" style={{ width: "30px", height: "30px" }}>
                                <i className="bi bi-chevron-right"></i>
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>


        
    )

    }