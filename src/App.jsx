import { useRef, useState } from 'react'


const Box = ({value, index, running, setBoard, XTurn, setXTurn, selected = false}) => {
  
  
  const handleClick = () => {
    
    if(value != '' || !running) return;

    setBoard((prev) => {

      const copy = [...prev];
      copy[index] = {value: XTurn ? 'X' : 'O', index: index};

      return copy;

    })

    setXTurn(!XTurn)

  }
  
  return(
    <div style={{backgroundColor: selected ? 'yellowgreen' : undefined}} onClick={handleClick} className='box'>{value}</div>
  )

}

function App() {

  const [XTurn, setXTurn] = useState(true);
  const [running, setRunning] = useState(true);
  const [board, setBoard] = useState([

    {value: '', index: 0, selected: false},
    {value: '', index: 1, selected: false},
    {value: '', index: 2, selected: false},
    {value: '', index: 3, selected: false},
    {value: '', index: 4, selected: false},
    {value: '', index: 5, selected: false},
    {value: '', index: 6, selected: false},
    {value: '', index: 7, selected: false},
    {value: '', index: 8, selected: false}
  ]);

  const [message, setMessage] = useState('teste');

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],

    [0, 3, 6], [1, 4, 7], [2, 5, 8],

    [0, 4, 8], [2, 4, 6]
  ];

  if(running) {
    let win = false;
    const value = XTurn ? 'O' : 'X';
    winningCombinations.forEach((combination) => {
      if(board[combination[0]].value == value && board[combination[1]].value == value && board[combination[2]].value == value){
        const copy = [...board];
        copy[combination[0]] = {value: value, index: copy[combination[0]].index, selected: true};
        copy[combination[1]] = {value: value, index: copy[combination[1]].index, selected: true};
        copy[combination[2]] = {value: value, index: copy[combination[2]].index, selected: true};
        setRunning(false);
        setBoard(copy);
        setMessage(XTurn ? 'Player O wins' : 'Player X wins');
        win = true;
      }
    })

    let draw = false;
    for(let i = 0; i < board.length; i++) {
      if(board[i].value == '') {break;}
      if(i == board.length - 1) {draw = true;}
    }
  
    if(draw && !win) {
      console.log('empate');
      setRunning(false);
      setMessage('Draw')
    }
  }

  const resetGame = () => {
    setBoard([

      {value: '', index: 0, selected: false},
      {value: '', index: 1, selected: false},
      {value: '', index: 2, selected: false},
      {value: '', index: 3, selected: false},
      {value: '', index: 4, selected: false},
      {value: '', index: 5, selected: false},
      {value: '', index: 6, selected: false},
      {value: '', index: 7, selected: false},
      {value: '', index: 8, selected: false}
    ]);

    setRunning(true);
    setXTurn(true);
  }

  return (
    <>
    <div style={{display: !running ? 'flex' : 'none'}} className="modal">
      <h2>{message} </h2>
      <button onClick={resetGame}>Play Again</button>
    </div>
    <div className="container">
      <button onClick={resetGame}>Restart</button>
      <div className="turn-container">
        <div style={{backgroundColor: XTurn ? 'rgba(243, 10, 80, 1)' : 'rgba(243, 10, 80, 0)'}}>X</div>
        <div style={{backgroundColor: XTurn ? 'rgba(243, 10, 80, 0)' : 'rgba(243, 10, 80, 1)'}}>O</div>
      </div>

      <div className="game-container">
        {board.map((item) => {
          return(
            <Box selected={item.selected} running={running} key={item.index} XTurn={XTurn} setXTurn={setXTurn} value={item.value} index={item.index} setBoard={setBoard}/>
          )
        })}
      </div>
    </div>
    </>

  )
}

export default App
