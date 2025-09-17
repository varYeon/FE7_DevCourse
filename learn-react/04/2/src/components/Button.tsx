// export default function Button({ text }: { text: string }) {
//   return (
//     <>
//       <button>{text}</button>
//     </>
//   );
// }

//
export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}
