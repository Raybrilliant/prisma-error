"use client";
import { Card, CardBody, Divider, Skeleton } from "@nextui-org/react";

const Loading = () => {
  return (
    <>
      <Card className="my-10">
        <Skeleton className="rounded-t-xl">
          <div className="w-full rounded-t-xl h-[25em] bg-default-300"></div>
        </Skeleton>
        <CardBody className="p-10">
          <div className="flex justify-between">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-1/4 rounded-lg">
              <div className="h-5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
          <Divider className="my-4" />
          <div className="flex justify-between gap-10 w-full">
            <Skeleton className="rounded-lg w-1/2 mx-auto">
              <div className="rounded-lg bg-center h-[500px] shadow-lg bg-default-300"></div>
            </Skeleton>
            <div className="mx-auto flex flex-col gap-5 w-full">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-32 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
            <Skeleton className="w-1/3 h-[250px] rounded-lg bg-default-300"/>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
export default Loading;
