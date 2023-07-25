import { GetLanguage } from "../Context/UseLanguagContext";

const Dashboard = () => {
  const { language } = GetLanguage();
  return (
    <div className="flex w-full items-center justify-center  font-semibold text-4xl bg-white rounded p-5">
      {language ? "مرحبًا بك في لوحة التحكم" : "Welcome to Dashboard"}
    </div>
  );
};

export default Dashboard;
