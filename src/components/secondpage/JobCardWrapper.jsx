import JobCard from "./JobCard";

const JobCardWrapper = () => {
  return (
    <div className="gap-4">
      <h1 className="text-3xl">Lorem Ipsum</h1>
      <div className="flex gap-8 mt-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <JobCard key={index} name={"LOREM IPSUM"} />
        ))}
      </div>
    </div>
  );
};

export default JobCardWrapper;
