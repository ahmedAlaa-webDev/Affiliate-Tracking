

export type UserData = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  totalClicks: number;
  referralCode?: string;
  referral?: string;
};