import React from 'react';
import Card from './Card';

function CardList({ cards = [] }) {

    return cards.length ? (
        <div className="CardList">
            {cards.map((cardData, idx) => (
                <Card
                    obj={cardData}
                    key={idx}
                    idx={idx}
                />
            ))}
        </div>
    ) : (
        <p>We apologize. No data can be found</p>
    );
}

export default CardList;