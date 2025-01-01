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

export interface TBus {
  busNumber: string;
  busType: string;
  busRoute?: string;
  busSeats?: number;
  currentLocation: {
    latitude: number;
    longitude: number;
  };
  sale: [
    {
      amount: number;
      date: Date;
    }
  ];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserInfo {
  data: {
    buses: [];
    createdAt: Date;
    email: string;
    phoneNumber: string;
    token: string;
    updatedAt: Date;
    username: string;
    _id: string;
  };
}

export interface TTransaction {
  amount: number;
  userId: string;
  transactionType: string;
  transactionDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
