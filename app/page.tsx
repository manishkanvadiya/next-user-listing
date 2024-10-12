//server page for the users lisitng
import UserList from "./_components/UserList";
import { User } from "@/utils/types/userTypes";

export const metadata = {
  title: "User List",
};

const Home = async () => {
  let loading = true;
  let users: User[] = [];
  try {
    users = await getUsers();
  } catch (err) {
    console.log(err);
  } finally {
    loading = false;
  }
  return (
    <div className="flex gap-5 p-5 h-svh">
      <UserList users={users} loading={loading} />
    </div>
  );
};

export default Home;

// api call on server side
const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/?limit=10`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  return data.users;
};
