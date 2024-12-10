const Profile = () => {
  return (
    <div className="m-auto px-4 py-8">
      <img
        src="peter.jpg"
        alt="Profile"
        className="m-auto rounded-full w-12 h-12"
      />
      <div className="mt-4">
        <h3 className="text-lg font-medium">Michael White</h3>
        <p className="text-gray-600">Profile</p>
      </div>
    </div>
  );
};

export default Profile;
