import backOfCard from './back.png';
import useFlip from './hooks/useFlip';
import './PlayingCard.css';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
	const [ isUp, flipCard ] = useFlip(true);
	return <img src={isUp ? front : back} alt="playing card" onClick={flipCard} className="PlayingCard Card" />;
}

export default PlayingCard;
