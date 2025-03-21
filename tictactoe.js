const board=document.querySelector('.board');
const cells=document.querySelectorAll('.cell');
const display=document.getElementById('Winner');

Let currentPlayer="X";
Let gameActive= true;
Let boardState=[``,``,``,``,``,``,``,``,``];

function hayGanador(){
   const combinacionesGanadoras=[
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [2,5,8], [1,4,7],
      [0,4,8], [2,4,6]
    ];
     for(const combinacion of combinacionesGanadoras){
     const [a,b,c]=combinacion;
     if (boardState[a] && boardState[a]===boardState[b] && boardState[a]===boardState[c]){
      return boardState[a];
        }

     }
    return null;
}   //fin de hayGanador


function cellClick(event){
   const cell= event.target;
   cost index=cell.dataset-index;

if(!gameActive || boardState[index]) return;
boardState[index]=currentPlayer;
cell.textContent=currentPlayer;
cell.classList.add('taken');

   const winner= hayGanador();

   if(winner){
      display.textContent=`El ganador es ${winner}`;
      gameActive=false;
   }
      else if(!boardState.includes('')){
          display.textContent=` X y O han empatado`;	
          gameActive=false;
    }
    else{
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
   }
}

cells.forEach(
   cell > cell.addEventListener('click' ,cellClick)
};