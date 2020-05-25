import React from 'react';

import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = ({ monsters }) => {
	const renderMonsterList = monsters.map(monster => (
		<Card key={monster.id} monster={monster} />
	));

	return <div className="card-list">{renderMonsterList}</div>;
};
