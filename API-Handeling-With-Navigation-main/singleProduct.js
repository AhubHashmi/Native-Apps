import {View,Text} from 'react-native'

function Product ({navigation,route}){

    console.log(route.params)

    return <>
    <View>
        <Text>id: {route.params.id}</Text>
        <Text>title: {route.params.title}</Text>
        <Text>price: {route.params.price}</Text>
        <Text>description: {route.params.description}</Text>
        <Text>category: {route.params.category}</Text>
        <Text>rating rate: {route.params.rating.rate}</Text>
        <Text>rating count: {route.params.rating.count}</Text>
    </View>
    </>
}
export default Product