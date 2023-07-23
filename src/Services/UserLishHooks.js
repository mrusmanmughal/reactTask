import axios from "axios";

export const GetUserList = async () => {
  const API = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";
  try {
    const response = await axios.get(API);
    return response;
  } catch (err) {
    console.log(err);
  }
};
