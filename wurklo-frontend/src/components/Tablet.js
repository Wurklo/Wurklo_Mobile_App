import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const Tablet = () => {

    return (
        <TouchableOpacity style={[tw`bg-white my-4 ml-4 rounded-xl`, style.cardShadow]}>
            <Image
                style={tw`h-36 w-36 rounded-xl`}
                source={{ uri: 'https://wurklo-mobile-images.s3.amazonaws.com/91533e321d0b740a20296c7ee9d69a1e'  }}
            />
        </TouchableOpacity>
    )
}

export default Tablet

const style = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 4,
        },
        shadowOpacity: 0.15,
        textShadowColor: "white",
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        textShadowRadius: 3,
        elevation: 1,
    }
  });