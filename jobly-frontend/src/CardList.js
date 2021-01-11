import React from 'react';
import Card from './Card';

function CardList({ cards = [], apply = () => null }) {

    return cards.length ? (
        <div className="CardList">
            {cards.map((cardData, idx) => (
                <Card
                    obj={cardData}
                    key={idx}
                    idx={idx}
                    apply={apply}
                />
            ))}
        </div>
    ) : (
        <p>We apologize. No data can be found</p>
    );
}

export default CardList;