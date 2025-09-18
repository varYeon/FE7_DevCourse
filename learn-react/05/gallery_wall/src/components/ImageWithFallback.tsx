type ImageWithFallbackProps = React.ComponentPropsWithoutRef<"img">;

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const { src, alt, className, ...rest } = props;
  return (
    <>
      <img src={src} alt={alt} className={className} {...rest} />
    </>
  );
}
