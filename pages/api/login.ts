// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

const AUTH_GRANT = {
    response_type: 'code',
    client_id: process.env.DISCORD_CLIENT_ID,
    scope: 'identify guilds guilds.members.read',
    // TODO: Get actual redirect URI
    redirect_uri: 'http://localhost:3000/api/login',
    prompt: 'none' // Do not reprompt if user has accepted scopes previously
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method?.toLowerCase() === 'get') {
        if (!req.query.code) {
            // TODO: Implement state for CSRF
            res.redirect(302, 'LOGIN PAGE')
            return
        }

        //exchange code
        const exchangeData: Record<string, string> = {
            'client_id': process.env.DISCORD_CLIENT_ID || "",
            'client_secret': process.env.DISCORD_CLIENT_SECRET || "",
            'grant_type': 'authorization_code',
            'code': req.query.code as string || "",
            'redirect_uri': 'http://localhost:3000/dashboard'
        }
        const oauth = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(exchangeData)
        })

        if (oauth.status !== 200) {
            res.status(400).end('Incorrect data')
            return
        }


    }
    res.status(200).json({ name: 'John Doe' })
}
