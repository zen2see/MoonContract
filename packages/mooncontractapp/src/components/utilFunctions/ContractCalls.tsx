import { ethers, providers } from 'ethers'
import { useState, } from 'react'
import Web3Modal from 'web3Modal'
import { mooncontractaddress } from '../../config/contractContext'
import MoonContract from '../../../../hardhat/artifacts/contracts/MoonContract.sol/MoonContract.json'
import styles from '../../styles/Globals'

let contractMoodValue: string

export function ContractCalls(props: any) {
  const [mood, setMood] = useState({
    mood: ""
  })
  const [contractMood, setContractMood] = useState({
    contractMood: ""
  })
  const handleChange = function ({ event }: { event: any} ) {
    setMood({ ...mood, [event.target.mood]: event.target.value })
  }

  async function handleSetMood(event: any): Promise<void> {
    // prevents the submit button from refreshing the page
    event.preventDefault()
    try {
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      let contract = new ethers.Contract(mooncontractaddress, MoonContract.abi, signer)
      let setMoodTx = await contract.setMood(mood.mood)
      await setMoodTx.wait()
      contractMoodValue = mood.mood
      console.log('Mood set to: ' + contractMoodValue)
      setMood({ mood: "" }) 
    } catch (error) {
        console.log('Error setting mood: ', error)
    }
  }

  async function handleGetMood(event: any): Promise<void>  {
    // prevents the submit button from refreshing the page
    event.preventDefault()
    try {
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      let contract = new ethers.Contract(mooncontractaddress, MoonContract.abi, signer)
      let moodvalue = await contract.getMood()
      setContractMood({ ...contractMood, contractMood: moodvalue })
      console.log('Mood value from contract data: ' + moodvalue)
    } catch (error) {
        console.log('Error getting mood: ', error)
    }
  }

  function onChange(e: any) {
    const mood = e.target.value
    try {
      setMood({ mood })
    } catch (error) {
      console.log('Error setting mood: ', error)
    }
  }
    
  return (
    <>
      <div>
        <form>
          <label className={`${styles.whiteText}`}>Please set or get the mood: </label>
          <input className={`${styles.moodText}}`}
            type="text"
            name="mood"
            value={mood.mood}
            onChange={onChange}
          />
          <button className={`${styles.moodBtn} relative left-2`} onClick={handleSetMood}>Set Mood</button>
          <button className={`${styles.moodBtn} relative left-4`} onClick={handleGetMood}>Get Mood</button>
        </form>
        <div className={`${styles.moodStatusText} p-5 relative right-6`}>
          {/* <h3>Current Mood value: {mood.mood}</h3> */}
          <h3>Current Contract Mood: {contractMood.contractMood}</h3>
        </div>
   
      </div>
    </>
  )
}

export default ContractCalls

