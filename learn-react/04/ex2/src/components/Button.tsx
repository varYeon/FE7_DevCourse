import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;
export default function Button(props: ButtonProps) {
  const { children, className = "", ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          `inter text-sm w-[77px] h-[44px] text-white rounded-lg cursor-pointer bg-[#4f4f4f] disabled:cursor-not-allowed`,
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
