import axios from "axios";

type productPageProp = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: productPageProp) => {
  const { id } = await params;
  console.log(id);

  const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  console.log(data);

  return (
    <>
      <div className="h-screen bg-white flex flex-col items-center gap-10">
        <h1 className="text-4xl text-center text-black font-extrabold mt-4">
          Blog Detail Page
        </h1>
        <div className="h-[400px] w-[600px] bg-green-400 rounded ">
          <h1 className="text-center text-3xl  font-bold text-white p-3">{data.title}</h1>
        <div className="flex justify-center items-center">
        <img src={data.images[0]} alt="" height={"70px"} width={"250px"}/>
        </div>
          <p className="text-center text-white p-3">{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default page;
