import PlayingCard from './PlayingCard';
import './PlayingCardList.css';
import useAxios from './hooks/useAxios';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
	const [ cards, addCard ] = useAxios('https://deckofcardsapi.com/api/deck/new/draw/');
	function formatCard(data) {
		return {
			image: data.cards[0].image
		};
	}

	return (
		<div className="PlayingCardList">
			<h3>Pick a card, any card!</h3>
			<div>
				<button onClick={() => addCard(formatCard)}>Add a playing card!</button>
			</div>
			<div className="PlayingCardList-card-area">
				{cards.map((cardData, idx) => {
					return <PlayingCard key={idx} front={cardData.cards[0].image} />;
				})}
			</div>
		</div>
	);
}

CardTable.defaultProps = {};

export default CardTable;
