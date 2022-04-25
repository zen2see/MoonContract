import styles from '../styles/Globals'
import Link from 'next/link'
import Wallet from '../components/Wallet'
console.log("in sectionWrapper")
const SectionWrapper = ({ title, description, banner, reverse }: any) => {

  return (
    <>
    <Wallet />
    <div className={`min-h-screen ${styles.section}
      ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>
      <div className={`flex items-center w-12/12 sm:w-full 
        ${reverse ? styles.boxReverseClass : styles.boxClass}`}>
        <div className={`${styles.descDiv}
          ${reverse ? "fadeRightMini" : "fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}`}>
          <h1 className={`${styles.h1Text}
            ${reverse ? styles.blackText : styles.whiteText}`}>{title}</h1>
          <p className={`${styles.descriptionText}
            ${reverse ? styles.blackText : styles.whiteText}`}>{description}</p>
          <ul className={`${styles.whiteText}`}>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper