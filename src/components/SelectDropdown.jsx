const SelectDropdown = ({ options, setSelectionOptions }) => {
  return (
    <select onChange={(e) => setSelectionOptions(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;