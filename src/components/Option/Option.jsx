export const Option = ({ valueArray }) => {
  return (
    <>
      {valueArray.map(({ name, value }) => (
        <option key={value} value={value}>
          {name ? name : value}
        </option>
      ))}
    </>
  );
};
