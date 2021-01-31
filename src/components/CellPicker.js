import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchModes } from "../store/fetchModes.js";
// Components 
import ActionsPanel from "./ActionsPanel.js";
import CellsGrid from "./CellsGrid.js";
import History from "./History.js";

function CellPicker() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchModes("http://demo1030918.mockable.io/"));
    }, []);

    return (
        <div className="cellpicker">
            <ActionsPanel />
            <CellsGrid />
            <History />
        </div>
    )
}

export default CellPicker;

