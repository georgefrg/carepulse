import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface StatCardProps {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string; // Use next/image for icons or custom icons as needed. Example: <Image src="/icon.png" alt="Icon" />  // Replace "/icon.png" with your actual icon path.  // Ensure that the icon is optimized for performance.  // Use the "alt" attribute to provide a description of the icon for screen readers.  // Make sure the icon is in the public directory or a CDN
}

const StatCard = ({ type, count = 0, label, icon }: StatCardProps) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          className="w-fit size-8"
        />
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>

      <p className="text-14-regular">{label}</p>
    </div>
  );
};

export default StatCard;
