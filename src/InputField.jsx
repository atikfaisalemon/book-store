const InputField = ({ inputText, placeholder, types, setText }) => {
  return (
    <div>
      <input
        className="border border-gray-600 p-3 rounded-xl"
        type={types}
        value={inputText}
        placeholder={placeholder}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};
export default InputField;
