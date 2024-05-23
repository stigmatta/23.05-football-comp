import './ClubInfo.css'
import ClubImage from './800px-Manchester_United_FC_crest.svg.png';

const info = {
    name:"Манчестер Юнайтед",
    city: "Траффорд, Большой Юнайтед",
    date:1878,
    image:ClubImage

}
export function ClubInfo(){
    return(
        <div className='ClubInfo'>
            <h1>Название клуба: {info.name}</h1>
            <h2>Город: {info.city}</h2>
            <h2>Дата основания: {info.date}</h2>
            <img src = {info.image} alt =""/>
        </div>
    )
}