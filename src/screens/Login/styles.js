import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    boxImage: {
        flex: 1,
        width: '100%'
    },
    imgBackground: {
        height: '100%',
        width: '100%'
    },
    boxButton: {
        position: 'absolute',
        bottom: 0,
        height: 240,
        width: '100%',
        backgroundColor: '#754C3B',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        alignItems: 'center',
        zIndex: 1,

    },
    boxIcon: {
        position: 'relative',
        top: -40,
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#E0E094',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 250,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,

        elevation: 1,
    },
})

export default styles