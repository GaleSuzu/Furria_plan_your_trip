import dbConnection from "../../../utils/dbConnection";
import User from "@/app/models/User";

export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    await dbConnection();
    const userItem = await User.findById(id);
    if (!userItem) {
      return new Response(
        JSON.stringify({ success: false, error: "User not found!" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(JSON.stringify({ success: true, data: userItem }), {
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

export const PUT = async (req, { params }) => {
  const { id } = params;

  try {
    await dbConnection();
    const body = await req.json();
    const userItem = await User.findByIdAndUpdate(id, body, { new: true });
    if (!userItem) {
      return new Response(
        JSON.stringify({ success: false, error: "User not found!" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(JSON.stringify({ success: true, data: userItem }), {
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

export const DELETE = async (req, { params }) => {
  const { id } = params;

  try {
    await dbConnection();
    const userItem = await User.findByIdAndDelete(id);
    if (!userItem) {
      return new Response(
        JSON.stringify({ success: false, error: "User not found!" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(JSON.stringify({ success: true, data: {} }), {
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
