//client page for the get user details
"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Skeleton,
} from "@nextui-org/react";
import { User, UserDetailType } from "@/utils/types/userTypes";
import UserDetail from "./UserDetail";
import axios from "axios";

interface UserListProps {
  users: User[];
  loading?: boolean;
}
const UserList: React.FC<UserListProps> = ({ users, loading }) => {
  const [userData, setUserData] = useState<UserDetailType | null>(null);
  const [selectedUserId, onSelectUserId] = useState<number | null>(null);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);

  //onclick api for the single user details on client side
  const handleClick = async (id: number) => {
    onSelectUserId(id);
    setLoadingDetail(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/${id}`
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingDetail(false);
    }
  };

  return (
    <>
      <Card className="w-[300px] rounded-sm">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">User List</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          {loading
            ? [...Array(10)].map((_, index) => (
                <Skeleton key={index} className="rounded-lg mb-2">
                  <div className="h-12 rounded-lg bg-default-300 "></div>
                </Skeleton>
              ))
            : users.map((user) => (
                <div
                  key={user.id}
                  onClick={() => handleClick(user.id)}
                  className="cursor-pointer"
                >
                  <div
                    className={`border px-2 py-1 mb-2 rounded-md hover:bg-gray-100 ${
                      selectedUserId === user.id ? "bg-gray-100" : ""
                    }`}
                  >
                    <div>
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="text-sm">{user.email}</div>
                  </div>
                </div>
              ))}
        </CardBody>
      </Card>
      <UserDetail userDetail={userData} loading={loadingDetail} />
    </>
  );
};

export default UserList;
