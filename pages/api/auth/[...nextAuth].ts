import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID || "",
            clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
            authorization: {
                params: {
                    scope: 'identify guilds guilds.members.read'
                }
            }
        }),
    ],
}

export default NextAuth(authOptions)