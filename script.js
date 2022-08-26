(function GameBoard() {
    const grid=document.querySelector('.grid');
    
    for(let i=0;i<9;i++){
        const square=document.createElement('div');
        square.textContent='';
        square.classList.add('square');
        square.setAttribute('id',`sq${i}`);
        grid.appendChild(square);
    }

    let board=[];

    document.querySelectorAll('.square').forEach(item =>{
        board.push(item.textContent);
    });
})();

(function Flow(){

    const players=(name,marker)=>{
        return {name, marker};
    };

    const playerOne= players('player one','X');
    const playerTwo= players('player two','O')

    let whoseTurn='';
    let theirMarker='';
    let playerOneTurn=true;
    let playerTwoTurn=false;
 
    function getCurrentPlayer(){
        if(playerOneTurn){
            whoseTurn=playerOne.name;
            theirMarker=playerOne.marker;
        } else if(playerTwoTurn){
            whoseTurn=playerTwo.name;
            theirMarker=playerTwo.marker;
        };
    };

    document.querySelectorAll('.square').forEach(item =>{
        item.addEventListener('click',()=>{
            item.textContent=theirMarker;
            playerOneTurn=!playerOneTurn;
            playerTwoTurn=!playerTwoTurn;
            getCurrentPlayer();
        });
    });
})();