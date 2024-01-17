import Strike from "./Strike";
import Tile from "./Tile";

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }) => {
  const renderTile = (index) => (
    <Tile
      key={index}
      playerTurn={playerTurn}
      onClick={() => onTileClick(index)}
      value={tiles[index]}
    />
  );

  const tileIndexes = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div className="board">
      {tileIndexes.map((index) => renderTile(index))}
      <Strike strikeClass={strikeClass} />
    </div>
  );
};

export default Board;
