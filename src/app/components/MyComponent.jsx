import Image from 'next/image';

const MyComponent = () => {
  return (
    <Image
      src="/images/About.jpg"
      alt="About"
      width={640}
      height={480}
    />
  );
};

export default MyComponent;
