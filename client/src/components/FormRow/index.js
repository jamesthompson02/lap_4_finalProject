const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div>
      <label htmlFor={name} className="label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        autoComplete="off"
        className="input"
      />
    </div>
  );
};

export default FormRow;
