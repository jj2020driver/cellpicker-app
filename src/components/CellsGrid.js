import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addHoverRecord } from "../store/hoverRecords.js";

function CellsGrid() {
    const modes = useSelector(state => state.modes);
    const activeMode = useSelector(state => state.activeMode);
    const isGameStarted = useSelector(state => state.isGameStarted);
    const dispatch = useDispatch();
    let cellsTable = null;
    let cellsGrid = null;

    if (activeMode) {
        const count = +modes.data[activeMode].field;

        cellsTable = generateTable(count);
        cellsGrid = (
            <div className={`cells-grid${isGameStarted ? " game-started" : "" }`}>
                { cellsTable }
            </div>
        );
    }

    function handleMouseOver(e) {
        if (!isGameStarted) return;
        const target = e.target;
        if (target.matches("tbody td")) {
            dispatch(addHoverRecord({ row: target.parentElement.sectionRowIndex + 1, column: target.cellIndex + 1 }));
        }
    }

    function generateTable(count) {
        if (!isFinite(count) || (count <= 0)) return null;

        let cellsArr = [];
        const rowsArr = [];
        for (let i = 1; i <= count; i++) {
            cellsArr.push(<td key={i} className="cell"></td>);
            if (!(i % 5) && (i > 1)) {
                rowsArr.push(<tr key={i}>{ cellsArr }</tr>);
                cellsArr = [];
            }
        }

        if (!rowsArr.length || cellsArr.length) {
            rowsArr.push(<tr key={1}>{ cellsArr }</tr>)
        }

        return (
            <table onMouseOver={handleMouseOver}>
                <tbody>
                    { rowsArr }
                </tbody>
            </table>
        )
    }

    return cellsGrid;
}

export default CellsGrid;