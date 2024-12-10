import React from "react";
import CardComponent from "./CardComponent"; // Assuming your CardComponent is in the same directory

const UserProfilesWrapper = () => {
  const userProfiles = [
    {
      name: "Kevin Buchanan",
      initials: "KB",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected",
      dateCount: 3,
      backgroundColor: "blue",
    },
    {
      name: "Nelle Howard",
      initials: "NH",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected",
      dateCount: 3,
      backgroundColor: "blue",
    },
    {
      name: "Nelle Howard",
      initials: "NH",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected",
      dateCount: 3,
      backgroundColor: "blue",
    },
    {
      name: "Nelle Howard",
      initials: "NH",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected",
      dateCount: 3,
      backgroundColor: "yellow",
    },
    {
      name: "Nelle Howard",
      initials: "NH",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected",
      dateCount: 3,
      backgroundColor: "yellow",
    },
    {
      name: "Nelle Howard",
      initials: "NH",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected",
      dateCount: 3,
      backgroundColor: "yellow",
    },
    {
      name: "Nelle Howard",
      initials: "NH",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected",
      dateCount: 3,
      backgroundColor: "blue",
    },
    {
      name: "Nelle Howard",
      initials: "NH",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected",
      dateCount: 3,
      backgroundColor: "blue",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {userProfiles.map((userProfile, index) => (
        <CardComponent
          key={index}
          name={userProfile.name}
          initials={userProfile.initials}
          text={userProfile.text}
          dateCount={userProfile.dateCount}
          backgroundColor={userProfile.backgroundColor}
        />
      ))}
    </div>
  );
};

export default UserProfilesWrapper;
