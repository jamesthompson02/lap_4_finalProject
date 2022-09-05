const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div>
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
};

export default FormRow;
