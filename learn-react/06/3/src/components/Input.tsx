type InputProps = Omit<React.ComponentPropsWithRef<"input">, "value"> & {
  value: string;
  setValue: (value: string) => void;
};
export default function Input(props: InputProps) {
  const { value, setValue, ref, ...rest } = props;
  return (
    <>
      <input
        {...rest}
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
