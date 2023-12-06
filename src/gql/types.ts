interface IJobGrade {
  id: string;
  name: string;
}

interface Role {
  id: string;
  name: string;
}

export interface IMember {
  no: string;
  name: string;
  birthday: string;
  gender: string;
  jobStartYear: string;
  joinedYear: string;
  profileImg: string;
  jobGrade: IJobGrade;
  role: Role;
}

export interface IMemberResponse {
  members: IMember[];
}
