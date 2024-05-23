import React from 'react';
import './ClubMembers.css'

const members = {
    "1": "Алтай Байындыр",
    "2": "Виктор Линделёф",
    "3": "Софьян Амрабат",
    "4": "Гарри Магуайр",
    "5": "Лисандро Мартинес",
    "6": "Мейсон Маунт",
    "7": "Бруну Фернандеш",
    "8": "Антони Марсьяль",
    "9": "Маркус Рашфорд",
    "10": "Расмус Хёйлунн"
};

export function ClubMembers() {
    return (
        <div className="ClubMembers">
            <h1>Текущий состав</h1>
            <ul>
                {Object.values(members).map((member) => (
                    <li>{member}</li>
                ))}
            </ul>
        </div>
    );
}
