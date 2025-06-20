
import { clerkClient, requireAuth, getAuth } from '@clerk/express'


export const courseProtect = async (req, res, next) => {
    try {

        const { userId } = getAuth(req)

        const user = await clerkClient.users.getUser(userId)

        if(!user)
            return res.json({success:false, message:"user not found"})

        req.user= user;
        next()


    } catch (err) {
        console.log(err.message)
        res.json({ success: false, message: err.message })
    }
}