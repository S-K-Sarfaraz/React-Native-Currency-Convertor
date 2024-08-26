import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

// Declaraion of type for ( Currency Button )
type CurrencyButtonProps = PropsWithChildren<{
    name:string;
    flag:string;
}>

// Defining a Button as the type of Currency Button declared above.
const CurrencyButton = (props: CurrencyButtonProps):JSX.Element => {
    return(
        <View style={styles.buttomContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttomContainer:{
        alignItems: 'center'
    },
    flag:{
        fontSize: 28,
        color: 'white',
        marginBottom: 4
    },
    country:{
        fontSize: 14,
        color: '#2d3436',
    }
})

export default CurrencyButton