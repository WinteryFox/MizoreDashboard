import { useRouter } from 'next/router'
import { useState } from 'react'
import { settings } from '../../components/settings/guild'

function LeftNav(props: { handleSetting: Function }) {
    return (
        <div>
            {
                settings.map((s, i) => (
                    <div onClick={handleSetting(i)}>
                        {s[0]}
                    </div>
                ))
            }
        </div>
    )
}

export default function GuildSettings() {
    const router = useRouter()
    const [setting, setSetting] = useState(0)
    const { guild: guildId } = router.query

    return (
        <div>
            <LeftNav handleSetting={setSetting} />
            {guildId}
        </div>
    )
}