import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveMode } from "../store/activeMode.js";
import { toggleGameStarted } from "../store/isGameStarted.js";
// Components
import SelectCustom from "./SelectCustom";

function ActionsPanel() {
    const modes = useSelector(state => state.modes);
    const activeMode = useSelector(state => state.activeMode);
    const isGameStarted = useSelector(state => state.isGameStarted);
    const dispatch = useDispatch();
    const [selectOptions, setSelectOptions] = useState([]);

    useEffect(() => {
        if (modes.data) {
            setSelectOptions(Object.keys(modes.data).map(item => {
                return {
                    value: item,
                    label: item.split(/(?=[A-Z])/)
                        .map((item, index) => index ? item.toLowerCase() : item[0].toUpperCase() + item.slice(1))
                        .join(" ")
                }
            }));
        }
    }, [ modes ]);

    function changeActiveMode(value) {
        dispatch(setActiveMode(value.value));
    }

    return (
        <div className="actions-panel">
            <SelectCustom options={selectOptions} changeFunction={changeActiveMode} />
            <button type="button" className="button" disabled={!activeMode} onClick={() => dispatch(toggleGameStarted())}>
                {isGameStarted ? "Stop" : "Start"}
            </button>
        </div>
    );
}

export default ActionsPanel;