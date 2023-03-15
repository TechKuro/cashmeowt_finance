const SelectDropdown = ({options, onChange}) => {
    return(
        <select onChange={onChange}>
        {options.map((option, index) => (
           <option key={index} value={option.value}>
            {option.label}
           </option> 
        ))}
        </select>
    )
}

export default SelectDropdown;