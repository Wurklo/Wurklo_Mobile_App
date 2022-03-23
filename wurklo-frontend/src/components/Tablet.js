import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const Tablet = () => {

    return (
        <TouchableOpacity style={tw`bg-white my-2 ml-2 rounded-xl`}>
            <Image
                style={tw`h-32 w-32 rounded-xl`}
                source={{ uri: 'https://wurklo-mobile-images.s3.amazonaws.com/91533e321d0b740a20296c7ee9d69a1e'  }}
            />
        </TouchableOpacity>
    )
}

export default Tablet