type CheckBoxProps = Omit<
  React.ComponentPropsWithoutRef<"CheckBox">,
  "type"
> & { type: "checkbox" };

export default function CheckBox(porps: CheckBoxProps) {
  const { children = "I Agree", ...rest } = props;
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          id="chk"
          className="appearance-none w-5 h-5 rounded-[5px] border border-[#4f4f4f] bg-[#4f4f4f] checked:bg-[url('/check.svg')] checked:bg-no-repeat checked:bg-center"
        />
        <label htmlFor="">{children}</label>
      </div>
    </>
  );
}
