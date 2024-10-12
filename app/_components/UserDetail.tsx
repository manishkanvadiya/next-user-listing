import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Tabs,
  Tab,
  Skeleton,
} from "@nextui-org/react";
import { UserDetailType } from "@/utils/types/userTypes";
import UserEdit from "./UserEdit";

interface UserDetailProps {
  userDetail: UserDetailType | null;
  loading: boolean;
}

const UserDetail: React.FC<UserDetailProps> = ({ userDetail, loading }) => {
  if (!userDetail) {
    return null;
  }

  return (
    <>
      <Card className="flex-1 rounded-sm ">
        <CardHeader>
          <div className="flex flex-col">
            <p className="text-md">User Details</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex w-full flex-col">
            {loading ? (
              [...Array(2)].map((_, index) => (
                <Skeleton key={index} className="rounded-lg mb-2">
                  <div className="h-14 rounded-lg bg-default-300 "></div>
                </Skeleton>
              ))
            ) : (
              <Tabs aria-label="Options" placement={"start"}>
                <Tab key="profile" title="Profile">
                  <div>
                    <p>
                      Name: {userDetail.firstName} {userDetail.lastName}
                    </p>
                    <p></p>
                    <p>DOB: {userDetail.birthDate}</p>
                    <p>
                      Address: {userDetail?.address?.address}
                      {", "}
                      {userDetail?.address?.city}
                    </p>
                  </div>
                </Tab>
                <Tab key="contacts" title="Contacts">
                  <div className="">
                    <p>Phone: {userDetail.phone}</p>
                    <p>Email: {userDetail.email}</p>
                  </div>
                </Tab>
              </Tabs>
            )}
          </div>
        </CardBody>
      </Card>
      <UserEdit />
    </>
  );
};

export default UserDetail;
