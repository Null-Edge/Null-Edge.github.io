var Previous_Click; //store previous click incase user wants to change

function game_set()
{
    //set game size to be dynamic
    board_size = 3;//prompt("Please Enter the prefered board size \nExample: 3 is 3X3 board \n(3, 6, 9, n)","4");
    /* need to check if board size is not empty and is number first */
    var Board_Container = document.getElementById('GameContainer');
    for (i = 0 ; i < board_size ; i++)
    {
        var TBL_P = document.createElement('p'); 
        Board_Container.appendChild(TBL_P);
        for (j = 0 ; j < board_size ; j++)
        {   //loop creates dynamic number of tables
            var TBL = document.createElement('table');
            TBL_P.appendChild(TBL);
            TBL.style.border = '1px solid black';
            for (var i = 0; i < 3; i++) 
            {   //loop creates 3 rows 
                var tbl_row = document.createElement('tr');  
                TBL.appendChild(tbl_row);
                for (var i = 0; i < 3; i++) 
                {   //loop creates 3 cells
                    var TData = document.createElement('td');
                    tbl_row.appendChild(TData);
                } 
            }
        }
        
    }
}

function game_start()
{
    Game = document.getElementById("GameContainer");
    for (i=0 ; i< Game.length; i++)
    {
        
    }
}