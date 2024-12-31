export interface TSuperAdminDashbaordData {
  userCount: number;
  adminCount: number;
  busCount: number;
}

export interface TUser {
  _id: string;
  amount: number;
  citizenshipNumber: string;
  createdAt: string;
  email: string;
  isVerified: boolean;
  location: {
    lastLatitude: number;
    lastLongitude: number;
    currentLatitude: number;
    currentLongitude: number;
  };
  onBoard: boolean;
  phoneNumber: string;
  rfidNumber: string;
  updatedAt: string;
  username: string;
}
