import Cell from "./cell";
import "./cell.css"
import "./board.css"

const Board = () => {
    let content = []
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let style
            if ((i + j) % 2 === 0) {
                style = "cell black"
            } else {
                style = "cell white"
            }
            content.push(<Cell name={style}/>)
        }
    }
    return (
        <div className="Board">
            {content}
        </div>
    )
}

export default Board