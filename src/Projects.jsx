function Projects() {
  return (
    <>
    <section className="h-screen px-24 pb-8">

    <h1 className="text-[5rem] text-center font-bold tracking-wide">
    PROJECTS
    </h1>

    <div className="relative grid grid-cols-[60%_40%] mt-8">

    <div className="relative">
    <div className="absolute top-0 left-0 w-full aspect-video bg-gray-400 rounded-3xl"></div>
    <div className="absolute top-7 left-7 w-full aspect-video bg-gray-500 rounded-3xl"></div>
    <div className="absolute top-15 left-15 w-full aspect-video bg-gray-600 rounded-3xl"></div>
    </div>

    <div className="">
    <p className="text-[3rem] font-medium ml-32">
    This is some bs description of this silly project we built while we 
    were high on coke bruh wtf this is not going were we want.
    </p>
    </div>

    {/* main */}
    </div>
    </section>
    </>
  );
}

export default Projects;
