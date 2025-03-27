import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedUserId = req.user._id;
    const filterdUsers = await User.find({ _id: { $ne: loggedUserId } }).select(
      "-password"
    );

    res.status(200).json(filterdUsers);
  } catch (error) {
    console.log("Error fetching users", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
