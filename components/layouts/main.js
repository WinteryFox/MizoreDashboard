import Navbar from '../navbar'
import Footer from '../footer'
import styles from '../../styles/Layout.module.css'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className={`${styles.main} pt-16`}>{children}</main>
            <Footer />
        </>
    )
}