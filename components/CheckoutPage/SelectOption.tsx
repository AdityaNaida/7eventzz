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
          <option value={value} selected disabled>
            {innerText}
          </option>
        </>
      ) : (
        <>
          <option value={value}>{innerText}</option>
        </>
      )}
    </>
  );
}
