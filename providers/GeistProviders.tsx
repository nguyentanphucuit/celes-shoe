"use client";
import { GeistProvider } from "@geist-ui/core";
import React from "react";

const GeistProviders = ({ children }: any) => {
  return <GeistProvider>{children}</GeistProvider>;
};

export default GeistProviders;
