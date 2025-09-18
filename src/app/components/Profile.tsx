import styles from "./Profile.module.css";
import Image from "next/image";

export default function Profile() {
  return (
    <div className={styles.profileMain}>
      <Image
        src="/profile-photo.jpg"
        alt="profile_photo"
        width="200"
        height="200"
      ></Image>
      <div>
        <h1>Katelyn Nguyen</h1>
        <h2>Software Engineer and Bioinformatician</h2>
      </div>
    </div>
  );
}
