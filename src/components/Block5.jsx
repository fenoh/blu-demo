import './Block5.css'

export default function Block3() {
    return (
        <div className='block5 d-flex justify-content-between text-white mt-5 pt-5'>
            <div>
                <img src='groupe.png' className='groupe-img'/>
            </div>
            <div className='textRightGrp'>
            <h2 style={{ marginBottom: '20px'}}>
                <span className='block'>Un point de départ idéal</span> <br/>
                <b style={{fontSize: '40px', paddingRight: '200px'}}> pour découvrir la Côte d’Azur !</b>
            </h2>
                <p className='texte'>Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. Randonnées dans le Massif de l’Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, chaque journée offre son lot d’aventures. Entre marchés provençaux, villages perchés et animations locales, l’art de vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable. </p>
            </div>

        </div>
    )
}