import React from "react";
import { tawkTo } from "@/config/services.config";

const TawkTo = () => {
  return (
    <script src={`https://embed.tawk.to/${tawkTo?.propertyId}/${tawkTo.widgetId}`} async />
  );
};

export default TawkTo;