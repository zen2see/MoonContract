import styles from '../styles/Globals'
import Link from 'next/link'
import Wallet from '../components/Wallet'

const about = ({ title, description, banner02 }: any) => {
  return (
    <div className={`min-h-screen ${styles.section} 
      ${styles.bgMediumgrey} ${banner02}`}>
      <div className={`flex items-center w-12/12 sm:w-full`}>
        <div className={`${styles.descDiv}`}>
          <h1 className={`${styles.h1Text}
            ${styles.blackText}`}>{title}
          </h1>
          <p className={`${styles.descriptionText}
            ${styles.blackText}`}>{description}
          </p>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default about