import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  let stats = {} // fetch
  return (
    <>
      <div className={`${styles.heroBanner} container relative mb-6`}>
        <div className="flex flex-col md:flex-row md:h-ic md:max-h-page overflow-hidden">
          <div className="flex-1 relative text-center">
            <Image className="md:absolute md:w-5/6 lg:w-3/4 md:bottom-0 md:right-0"
              src="/avatar.webp" alt="Mizore Avatar" width={1357} height={2048} />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center px-4 py-16">
            <h1 className={`${styles.title} text-8xl mb-4`}>Mizore</h1>
            {/** TODO: add subheading */}
            <h2 className={`${styles.subtitle} text-3xl mb-3`}>Subheading here</h2>
            <button type="submit" className={`${styles.button} inline-block p-3`}>Add to server</button>
          </div>
        </div>
      </div>
      <div className={`${styles.innerContainer} ${styles.stats}`}>
          <div className="container mx-auto">
            <p className="text-lg md:w-1/2 md:text-right">Serving <strong>{'{}'}</strong> servers</p>
            <p className="text-lg md:text-center"><strong>{'{}'}</strong> users strong</p>
            <p className="text-lg md:w-1/2 md:ml-auto md:text-left">Another <strong>statistic</strong></p>
          </div>
      </div>
      <div className={`${styles.innerContainer} ${styles.sheetMusic}`}>
        <div className="container bg-white flex flex-col lg:flex-row h-ic mx-auto max-h-page">
          <div className="flex-1 min-h-full text-center px-8 lg:border-r lg:border-black lg:border-dashed">
            <h3 className="font-bold mt-36 text-3xl">Features</h3>
            <p>Why you should add me</p>

            {/* <ol className="list-[lower-roman] list-inside block text-left w-80 mx-auto mt-16 mb-80"> */}
            <ol className="block text-left w-3/4 lg:w-96 mx-auto mt-16 mb-80">
              <li>Fun virtual pet system</li>
              <li>Show/trade collectibles</li>
              <li>99.9% uptime</li>
              <li>24/7 support server</li>
            </ol>

            <p>Kitauji High School</p>
          </div>
          <div className="flex-1">
            {/** TODO: Fill this section with image? */}
            <Image src="/sc1.webp" alt="Screenshot 1" width={681} height={350}></Image>
            placeholder
          </div>
        </div>
      </div>
      <div className={`${styles.innerContainer}`}>
        <div className="container h-ic max-h-halfpage flex flex-row">
          <div className="flex-1 h-full invisible md:visible relative">
            <Image className="absolute h-full object-contain"
              src="/nozomi+mizore.webp" alt="Nozomi and Mizore" width={1300} height={1779}></Image>
          </div>
          <div className="flex-1 text-center flex flex-col justify-center items-center">
            <h3 className="text-3xl font-bold">Support Me</h3>
            <p>Running bot not free.</p>
            <p>Help is much appreciated.</p>
          </div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 h-8"
          style={{backgroundImage: 'url(/oboetile.webp)', backgroundSize: 'auto 100%'}}></div>
      </div>
      <div className={`${styles.innerContainer}`}>
        <div className="container h-ic max-h-page flex flex-row">
          <div className="flex-1 text-center flex flex-col justify-center items-center">
            <h3 className="text-3xl font-bold">Virtual Pets</h3>
            <p>Virtual</p>
          </div>
        </div>
      </div>
    </>
  )
}
