import dbConnection from "../../utils/dbConnection";
import Cost from "@/app/models/Cost";

export const GET = async (req) => {
  try {
    await dbConnection();
    const cost = await Cost.find({});
    return new Response(JSON.stringify({ success: true, data: cost }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const POST = async (req) => {
  try {
    await dbConnection();
    const body = await req.json();
    const cost = await Cost.create(body);
    return new Response(JSON.stringify({ success: true, data: cost }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
