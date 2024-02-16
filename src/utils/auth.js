import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "./connect";

export const authOptions = {
    // adapter: PrismaAdapter(prisma),
    providers: [
        // VKProvider({
        //     clientId: process.env.VK_CLIENT_ID,
        //     clientSecret: process.env.VK_CLIENT_SECRET
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        // ...add more providers here
    ],
}