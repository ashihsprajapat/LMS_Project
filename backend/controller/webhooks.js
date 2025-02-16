

import { Webhook } from "svix";
import { User } from './../model/user.model.js';

//Api controller function to mangaae

export const clerkwebhooks = async (req, res) => {
    try {

        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        })

        const { data, type } = req.body;

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    email: data.email_address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url,
                }

                await User.create(userData)
                    .then(() => console.log("user created"))
                res.JSON({})
                break;
            }
            case 'user.updated': {
                const userData = {
                    email: data.email_address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url,
                }
                await User.findByIdAndUpdate(data.id, userData)
                    .then(() => console.log("user update"))
                res.JSON({})
                    ;
                break;
            }
            case 'user.deleted': {
                await User.findByIdAndDelete(data.id)
                    .then(() => console.log("user deleted"))
                res.JSON({})
                break;
            }
        }

    } catch (e) {
        console.log(e);
        res.JSON({ success: false });
    }
}