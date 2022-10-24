import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

const Profile = () => {
  return (
    <Image
      priority
      src="/images/profile.jpg"
      className={utilStyles.borderCircle}
      height={144}
      width={144}
      alt={"seungbo"}
    />
  );
};

export default Profile;
