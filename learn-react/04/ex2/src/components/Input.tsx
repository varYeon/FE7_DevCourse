//type InputProps = React.ComponentPropsWithoutRef<"Input">;
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type: "text" | "password" | "email" | "number" | "date";
};

export default function Input(props: InputProps) {
  const { ...rest } = props;
  return (
    <>
      <input
        className="inter w-60 h-11 rounded-lg placeholder:#acacac bg-white border border-#4f4f4f px-4"
        {...rest}
      />
    </>
  );
}
