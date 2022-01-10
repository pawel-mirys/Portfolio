type ImageProps = {
  path: string;
  alt: string;
};

export const Image = ({ path, alt }: ImageProps) => {
  return <img src={`${process.env.PUBLIC_URL}${path}`} alt={alt} />;
};
