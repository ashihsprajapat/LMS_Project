

import mongoose, { model } from "mongoose";
import { userSchema } from "../schema/user.schema.js";

export const User = model("User", userSchema);
