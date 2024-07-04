import { Details } from "@/components/details";
import { Product } from "@/components/product";
import { Spinnaker } from "next/font/google";
import React, { Suspense } from "react";

function ProductDetails() {
  return (
    <div>
      ProductDetails
      <Suspense fallback={"loading..."}>
        <Product />
      </Suspense>
      <Suspense fallback={"loading"}>
        <Details />
      </Suspense>
    </div>
  );
}

export default ProductDetails;
