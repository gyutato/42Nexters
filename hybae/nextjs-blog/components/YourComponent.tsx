import Image from "next/image";

const YourComponent = () => {
  return (
    <Image
      src="/images/profile.jpeg"
      height={144}
      width={144}
      alt="Your Name"
    />
  );
};

export default YourComponent;
