import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const Tablet = () => {
    return (
        <TouchableOpacity style={tw`bg-white my-2 ml-2 rounded-xl`}>
            <Image
                style={tw`h-32 w-32 rounded-xl`}
                source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?fit=bounds&format=jpg&width=960' }}
            />
        </TouchableOpacity>
    )
}

export default Tablet