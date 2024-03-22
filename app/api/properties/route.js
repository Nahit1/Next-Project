import connectDB from "@/config/database";
import Properties from "@/models/Properties";

//GET /api/properties
export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Properties.find({});
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
