import React from "react";

export const Details = async () => {
  await new Promise((res) => setTimeout(res, 2000));
  return <h1>Details</h1>;
};
