import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
        // paddingRight:10,
        // paddingLeft:10
    },
    input: {
        paddingLeft:  1,
        paddingRight: 1,
    },
    btn: {
        fontSize: 11,
        paddingBottom: 10,
    },
    logo: {
        aspectRatio: 1,
        resizeMode: 'center',
        width:  300,
        height: 300
    },
    logoView: {
        justifyContent: "center",
        alignItems: "center"
    },
    loading: {
        padding: 20,
    }
});