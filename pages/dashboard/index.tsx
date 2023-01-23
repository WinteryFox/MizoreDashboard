import Layout from '../components/layouts/main'
import { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Dashboard() {
    const { data: session } = useSession()
    let loaded = false;

    if (!loaded && !session) {
        return (
            <div>Loading <button onClick={() => signIn('discord')}>Sign in</button></div>
        )
    }

    return (
        <div>
            <p>{JSON.stringify(session)}</p>
        </div>
    )
}

Dashboard.getLayout = function getLayout(page: NextPage) {
    return (<Layout>{page}</Layout>)
}