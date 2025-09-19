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
        style={{ borderRadius: "50%" }}
      ></Image>
      <div>
        <h1>Katelyn Nguyen</h1>
        <h2>Software Engineer and Bioinformatician</h2>
        <h3>Computer Science: Bioinformatics Specialization @ UC San Diego</h3>
      </div>
      <div>
        <Image src="/email_logo.svg" alt="email" width="40" height="40"></Image>
        <Image
          src="/Linkedin_icon.svg"
          alt="linkedin"
          width="40"
          height="40"
        ></Image>
      </div>
    </div>
  );
}
