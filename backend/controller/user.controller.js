

import { clerkClient, requireAuth, getAuth } from '@clerk/express'

//get user Data
export const getUserData = async (req, res) => {

    //clerkMiddleware();

    console.log(req.body)

    const { userId } = getAuth(req);

    console.log("userId from token:", userId);

    try {
        // const user = await User.findById(userId);
        const user = await clerkClient.users.getUser(userId)
        console.log("user fond is ", user)

        if (!user)
            return res.json({ success: false, message: "user not found" })

        res.json({ success: true, user })

    } catch (err) {
        res.json({ success: false, message: err.message })
    }

}