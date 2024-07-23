import dbConnection from "../../utils/dbConnection";
import User from "@/app/models/User";

export const GET = async (req) => {
  try {
    await dbConnection();
    const user = await User.find({});
    return new Response(JSON.stringify({ success: true, data: user }), {
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
    const user = await User.create(body);
    return new Response(JSON.stringify({ success: true, data: user }), {
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
