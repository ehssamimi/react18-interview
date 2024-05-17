import {useState} from "react";

const Sudoku = () => {








    const [numberSelected,setnummberSelected]=useState<number>(0)
    const size = 9;
    const subgridSize = 3;
    function generateSudoku() {

        let board = Array.from({ length: size }, () => Array(size).fill(0));

        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                let numbers = shuffleArray(getPossibleNumbers(board, row, col, size));
                for (let number of numbers) {
                    if (checkPlacement(board, row, col, number)) {
                        board[row][col] = number;
                        break;
                    }
                }
            }
        }
        return board;
    }

    function getPossibleNumbers(board:any, row:any, col:any, size:any) {
        let possible = new Set(Array.from({ length: size }, (_, i) => i + 1));
        for (let i = 0; i < size; i++) {
            possible.delete(board[row][i]);
            possible.delete(board[i][col]);
            let subgridRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
            let subgridCol = Math.floor(col / 3) * 3 + i % 3;
            possible.delete(board[subgridRow][subgridCol]);
        }
         return Array.from(possible);
    }

    function checkPlacement(board:any, row:any, col:any, number:any) {
        for (let i = 0; i < board.length; i++) {
            if (board[row][i] === number || board[i][col] === number) {
                return false;
            }
            let subgridRow = Math.floor(row / subgridSize) * subgridSize + Math.floor(i / subgridSize);
            let subgridCol = Math.floor(col / subgridSize) * subgridSize + i % subgridSize;
            if (board[subgridRow][subgridCol] === number) {
                return false;
            }
        }
        return true;
    }

    function shuffleArray(array:any) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // console.log(generateSudoku());
    const SudokuItems=generateSudoku()


    function generateArray(rows: number, cols: number, onesCount: number): any[][] {
        if (onesCount > cols) {
            throw new Error('The number of ones cannot be greater than the number of columns');
        }

        let array: any[][] = Array.from({ length: rows }, () => Array(cols).fill(0));

        for (let i = 0; i < rows; i++) {
            let onesPlaced: number = 0;
            while (onesPlaced < onesCount) {
                let position = Math.floor(Math.random() * cols);
                if (array[i][position] === 0) {
                    array[i][position] = ' ';
                    onesPlaced++;
                }
            }
        }

        return array;
    }

    const rows: number = size;
    const cols: number = size;
    const onesCount: number = 1; // Number of '1's per row
    const patternArray: any[][] = generateArray(rows, cols, onesCount);

    console.log('sudokuArray');
    console.log(patternArray);




    const cellClick=(row:number, col:number)=>{
        if (numberSelected!==10){
            patternArray[row][col]=numberSelected
        }else {
            patternArray[row][col]=' '
        }
        console.log(row,col)
     }




    return (
        <div>
            <div className='flex justify-center w-screen '>

                <div>
                    {
                        SudokuItems.map((row,i)=><div key={i} className='flex  '>
                            {row.map((col,j)=><span key={j} className={`p-3 border box-border w-12 h-12 flex items-center justify-center ${!!patternArray[i][j]&&'border-amber-500'}`} onClick={()=>cellClick(i,j)}>{ !!patternArray[i][j]?patternArray[i][j]: col}</span>)}
                        </div>)
                    }
                </div>




            </div>
            <div className='flex justify-center w-screen gap-2 mt-6'>
                {
                    Array.from({length:10},(_,i)=>i+1).map((number,index)=><span   className={`p-3 border box-border min-w-12 h-12 flex items-center justify-center ${setnummberSelected}`}  key={index} onClick={()=>setnummberSelected(number)}>{number!==10?number:'پاک کن '}</span>)
                }

            </div>

        </div>

    );
};

export default Sudoku ;