export interface UserType {
  id: number;
  email: string;
  profileImageUrl: string;
  nickName: string;
  name: string;
  jumin: string;
  carrier: string;
  phoneNumber: string;
}

export interface UserSignUpFormType {
  email: string;
  name: string;
  phoneNumber: string;
  jumin: string;
  carrier: string;
}
