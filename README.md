# Currency Convertor App

- Making The Interface by the name of 'Currency' for the data coming to be converted

```
interface Currency {
    name: string;
    value: number;
    flag: string;
    symbol: string;
}
```

- Constants which is required for the conversion of data which comes in an Array ( This data is created according to the interface mentioned above )

```
export const currencyByRupee: Currency[] = [
    {
      name: 'DOLLAR',
      value: 0.012271428,
      flag: '🇺🇸',
      symbol: '$',
    },
    {
      name: 'EURO',
      value: 0.01125809,
      flag: '🇪🇺',
      symbol: '€',
    },
  ];
```

- Button Creation for Currency convertion

  - Declaraion of type for ( Currency Button )

  ```
  type CurrencyButtonProps = PropsWithChildren<{
    name:string;
    flag:string;
  }>
  ```

  - Defining a Button as the type of Currency Button declared above.

  ```
  const CurrencyButton = (props: CurrencyButtonProps):JSX.Element => {
     return(
        <View style={styles.buttomContainer}>
              <Text style={styles.flag}>{props.flag}</Text>
              <Text style={styles.country}>{props.name}</Text>
        </View>
     )
  }
  ```

- importing currecy data from ( Constants )

```
import { currencyByRupee } from './constants'
```

- importing Button Component from ( components ) file

```
import CurrencyButton from './components/CurrencyButton'
```

- Downloaded the snackbar libery and imported it for pop ups in app

```
npm i react-native-snackbar
import Snackbar from 'react-native-snackbar'
```

- Created the State Variabel for input, result and target currency

```
const [inputValue, setInputValue] = useState('')
const [resultValue, setResultValue] = useState('')
const [targetCurrency, setTargetCurrency] = useState('')
```

- button press for target currency

  - If button is clicked without inputing the value and the logic for the currency convertion
  - If the input is given in NaN format it also give a snackBar error

  ```
  const buttonPressed = (targetCurrency: Currency) => {
     if (!inputValue) {
        return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor:'#EA7773',
        textColor: '#000000'
        })
     }

     const inputAmount = parseFloat(inputValue)
     if (!isNaN(inputAmount)) {
        const convertedValue = inputAmount * targetCurrency.value
        const result = `${targetCurrency.symbol} ${convertedValue.toFixed(2)}`
        setResultValue(result)
        setTargetCurrency(targetCurrency.name)
     } else {
        return Snackbar.show({
        text: 'Not a valid number to convert',
        backgroundColor:'#F4BE2C',
        textColor: '#000000'
        })
     }
  }
  ```

- Text input for inputing the amount in rupees

```
<Text style={styles.rupee}>₹</Text>
   <TextInput
      maxLength={14}
      value={inputValue}
      onChangeText={setInputValue}
      keyboardType='number-pad'
      placeholder='Enter the amount in Rupees'
   />
```

- When the result is generated then this component is visible

```
{resultValue && (
   <Text style={styles.resultTxt}>
      {resultValue}
   </Text>
)}
```

- Flat List With Render Item

```
<FlatList
   numColumns={1}
   data={currencyByRupee}
   keyExtractor={item => item.name}
   renderItem={({item}) => (
      <Pressable
         style={[
            styles.button,
               targetCurrency === item.name && styles.selected
            ]}
         onPress={() => buttonPressed(item)}
      >
         <CurrencyButton {...item}/>
      </Pressable>
            )}
          />
```
