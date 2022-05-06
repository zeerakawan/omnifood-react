const TestimonialImg = ({ images, alt }) => {
  return images.map((pic) => {
    return <img src={pic} alt={alt} />;
  });
};

export default TestimonialImg;
