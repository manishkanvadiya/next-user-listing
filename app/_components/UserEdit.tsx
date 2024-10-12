import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import React from "react";

const UserEdit = () => {
  return (
    <Card className="w-[300px] rounded-sm">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">User Edit</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody></CardBody>
    </Card>
  );
};

export default UserEdit;
