const user = {
    uid: "string",
    id: "string",  // This will be the Firebase Auth UID
    name: "string",
    email: "string",
    phoneNumber: "string",  // Optional
    address: "string",      // Optional
    profilePictureUrl: "string",  // Optional
    createdAt: new Date(),
    updatedAt: new Date(),
    paymentMethods: ["string"],  // Optional
    shopName: "string",         // Optional
    darkModeEnabled: true,
    notificationSettings: {
      email: true,
      push: true,
      sms: true,
    },
    savedAds: ["string"],  // Array of ad IDs that the user has saved
    postedAds: ["string"],  // Array of ad IDs that the user has posted
    isVerified: true,      // Optional
  };
  