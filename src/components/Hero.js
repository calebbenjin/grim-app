import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from './Button'

const Hero = () => {
  const [trackFormBtn, setTrackFormBtn] = useState(true)

  const handleToggle = () => {
    setTrackFormBtn(false)
  }

  return (
    <div className='hero'>
      <div className="container">
        <div className='heroFlex'>
          <div className='content'>
            <h1>How to send money with WorldRemit</h1>
            <p>
              Send money for medical care, emergency supplies and anything else
              your family and friends need to bank accounts in Ukraine and
              nearby countries for $0* fees from the United States, Canada and
              Europe.
            </p>
          </div>
          <div className='trackForm'>
            <div className='trackFormContainer'>
              <div className='formHeader'>
                <button
                  onClick={handleToggle}
                  className={trackFormBtn ? 'leftBtn' : 'leftBtn btnActive'}
                >
                  RATES & FEES
                </button>
                <button
                  onClick={() => setTrackFormBtn(true)}
                  className={trackFormBtn ? 'rightBtn btnActive' : 'rightBtn'}
                >
                  TRACK & RECEIVE
                </button>
              </div>
              {trackFormBtn ? (
                <div className='formBody track'>
                  <form>
                    <p>
                      Enter the required information below to see if your money
                      is available.
                    </p>
                    <div className='formControl'>
                      <label htmlFor='name'>REF/AUTH NUMBER</label>
                      <input type='text' />
                    </div>
                    <div className='formControl'>
                      <label htmlFor='name'>YOUR LAST NAME</label>
                      <input type='text' />
                    </div>
                    <div className='formBtn trackBtn'>
                      <Button>Track Your Money</Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className='formBody'>
                  <form>
                    <div className='formControl'>
                      <label htmlFor='name'>SEND</label>
                      <input type='text' placeholder='Send Amount' />
                    </div>
                    <div className='formControl'>
                      <label htmlFor='name'>RECEIVER COUNTRY</label>
                      <input type='text' placeholder='Receiver Country' />
                    </div>
                    <div className='formBtn'>
                      <Button>Estimate Fees</Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
