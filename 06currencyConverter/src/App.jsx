import { use, useState } from 'react'
import './App.css'
import { InputBox } from './components'

import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {


  const [amount, setAmount] = useState(0)
  const [from,setFrom ] = useState("usd")
  const [to,toSet ] = useState("inr")

  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo  = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  
  const swap = ()=>{
    setFrom(to)
    toSet(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

  }

  const convert = () =>{
      setConvertedAmount(amount *currencyInfo[to])
  }


  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=> setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                            onCanPlay={swap}
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                            
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

// functionality reducers ke through hi store(global variable) me jani chaiye
// never modify your state
// reducers k through hi changes hone chaiye functionality m store ki
//data flow is best in redux & no need to spreadout array like ...array to get previus arr in new arr

export default App
