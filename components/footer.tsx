import styles from '../styles/Footer.module.scss'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <Image src="/avatar.webp" width={26} height={41} alt="Mizore Avatar"></Image>
          <p>
            Important disclaimer or anything random blah blah blah
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:mr-8">
            <p><strong>Contact</strong></p>
            <a href="mailto:yayaya@example.com">contact@example.com</a>
          </div>
          <div>
            <p><strong>Links</strong></p>
            <a href="/privacy"><p>Privacy Policy</p></a>
            <a href="https://discord.gg/6vJXZ8d"><p>Support Server</p></a>
          </div>
        </div>
      </div>
      <p className="text-center">
        Pinnouse + Amy {'\u00a9'} 2022
      </p>
    </footer>
  )
}