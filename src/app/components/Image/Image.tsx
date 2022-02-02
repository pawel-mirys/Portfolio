type ImageProps = {
  path: string;
  alt: string;
  className: string;
};

export const Image = ({ path, alt, className }: ImageProps) => {
  return (
    <img
      className={className}
      src={`${process.env.PUBLIC_URL}${path}`}
      alt={alt}
    />
  );
};
