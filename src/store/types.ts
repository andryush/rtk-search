export type Subject = {
  id: number;
  name: string;
  sequence: number;
};

export type SubjectsData = { data: Subject[] };

export type Specialist = {
  userId: string;
  name: string;
  sex: 1 | 2;
  age: number;
  birthDate: string;
  photoUrl: string;
  avatarId: string;
  level: 0 | 1;
  rating: number;
  hasVideo: boolean;
  defaultSubjectName: string;
  subjectsCount: number;
  isFavorite: boolean;
  onlineStatus: 1 | 2;
  lastActivityTime: string;
};

export type SpecialistsData = {
  data: {
    items: Specialist[];
    totalCount: number;
  };
};
