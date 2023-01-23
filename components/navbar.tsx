import styles from '../styles/Navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={`${styles.nav} fixed w-full z-50`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    Mizore
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/" className={styles.link}>Home</Link>
                                <Link href="/dashboard" className={styles.link}>Dashboard</Link>
                                <Link href="https://discord.gg/6vJXZ8d" className={styles.link}>Support Server</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a href="" className={styles.action}>Add to server</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}