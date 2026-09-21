export type UserData = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  totalClicks: number;
  referral :string
};