import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GetUserList = () => {
  const data = async () => {
    const API = "https://jsonplaceholder.typicode.com/users";

    const response = await axios.get(API);
    console.log(response);
    return response;
  };

  return useQuery({
    queryKey: ["users"],
    queryFn: data,
  });
};
export default GetUserList;
