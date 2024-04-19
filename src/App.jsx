import { useState } from 'react'


const Box = ({XTurn, setXTurn}) => {

  const [current, setCurrent] = useState('');

  const handleClick = () => {
    console.log('ain que delicia');
    if (current != '') return;
    XTurn ? setCurrent('X') : setCurrent('O');
    setXTurn(!XTurn);
  }

  return(
    <div onClick={handleClick} className="box">
      {current}
    </div>
  )


}

function App() {

  const [XTurn, setXTurn] = useState(true);  

  return (
    
    <div className="container">
      <h3>Turn for</h3>
      <div className="turn-container">
        <div style={{backgroundColor: XTurn ? 'rgba(243, 10, 80, 1)' : 'rgba(243, 10, 80, 0)'}}>X</div>
        <div style={{backgroundColor: XTurn ? 'rgba(243, 10, 80, 0)' : 'rgba(243, 10, 80, 1)'}}>O</div>
      </div>

      <div className="game-container">
        <Box XTurn={XTurn} setXTurn={setXTurn}/>
        <Box XTurn={XTurn} setXTurn={setXTurn}/>
        <Box XTurn={XTurn} setXTurn={setXTurn}/>
        <Box XTurn={XTurn} setXTurn={setXTurn}/>
        <Box XTurn={XTurn} setXTurn={setXTurn}/>
        <Box XTurn={XTurn} setXTurn={setXTurn}/>
        <Box XTurn={XTurn} setXTurn={setXTurn}/>
        <Box XTurn={XTurn} setXTurn={setXTurn}/>
        <Box XTurn={XTurn} setXTurn={setXTurn}/>
      </div>
    </div>

  )
}

export default App
