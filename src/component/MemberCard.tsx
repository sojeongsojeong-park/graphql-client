import { IMember } from "@/gql/types";
import Image from "next/image";

const MemberCard = ({
  no,
  name,
  birthday,
  gender,
  jobStartYear,
  joinedYear,
  profileImg,
  jobGrade,
  role,
}: IMember) => {
  return (
    <div style={{ width: "100%" }}>
      <Image
        src={profileImg}
        alt={`profile_of_${name}`}
        width={100}
        height={150}
      />
      <p>name: {name}</p>
      <p>gender: {gender}</p>
      <p>birthday: {birthday}</p>
    </div>
  );
};

export default MemberCard;
