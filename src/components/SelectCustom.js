import Select, { components } from "react-select";

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <i style={{
                borderTop: "5px solid #000",
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent" }}
            ></i>
        </components.DropdownIndicator>
    );
};

function SelectCustom({ options, changeFunction = () => {} }) {

    function handleChange(value) {
        changeFunction(value);
    }

    return (
        <Select
            className="select"
            classNamePrefix="select"
            placeholder="Pick mode"
            options={options}
            components={{ DropdownIndicator }}
            onChange={handleChange}
        />
    );
}

export default SelectCustom;