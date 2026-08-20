function Skills() {
  return (
    <>
    <section className="relative h-screen">
      <h1 className="absolute left-1/2 top-0 z-10 -translate-x-1/2 text-[80px] font-black tracking-tight sm:text-[110px] md:text-[150px] lg:text-[180px]">
        SKILLS
      </h1>

      <div className="absolute left-1/2 top-[48%] z-30 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:w-[350px] md:w-[430px] lg:w-[500px]">
        <img
          src="/src/assets/astronaut.webp"
          alt=""
        />
      </div>

      <div className="absolute left-[10%] top-[18%] z-20 w-[150px] transition duration-500 hover:-translate-y-3 sm:w-[180px] md:w-[210px]">
        <img
          src="/src/assets/cpp.webp"
          alt="C++"
        />

        <p className="text-center text-sm font-bold">
          C++
        </p>
      </div>

      <div className="absolute right-[10%] top-[15%] z-20 w-[150px] transition duration-500 hover:-translate-y-3 sm:w-[180px] md:w-[210px]">
        <img
          src="/src/assets/react.webp"
          alt="React"
        />

        <p className="text-center text-sm font-bold">
          REACT
        </p>
      </div>

      <div className="absolute bottom-[12%] left-[18%] z-20 w-[160px] transition duration-500 hover:-translate-y-3 sm:w-[190px] md:w-[220px]">
        <img
          src="/src/assets/python.webp"
          alt="Python"
        />

        <p className="text-center text-sm font-bold">
          PYTHON
        </p>
      </div>

      <div className="absolute bottom-[12%] right-[15%] z-20 w-[160px] transition duration-500 hover:-translate-y-3 sm:w-[190px] md:w-[220px]">
        <img
          src="/src/assets/linux.webp"
          alt="Linux"
        />

        <p className="text-center text-sm font-bold">
          LINUX
        </p>
      </div>
    </section>

    </>
  )
}

export default Skills;
