export default function SelectOption({
  value,
  innerText,
  isSelected,
  isDisabled,
}: {
  value: string;
  innerText: string;
  isSelected: boolean;
  isDisabled: boolean;
}) {
  return (
    <>
      {isSelected && isDisabled ? (
        <>
          <option defaultValue={value} selected disabled>
            {innerText}
          </option>
        </>
      ) : (
        <>
          <option defaultValue={value}>{innerText}</option>
        </>
      )}
    </>
  );
}
