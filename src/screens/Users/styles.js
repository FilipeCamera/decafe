import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 26,
        fontFamily: 'brush-script-mt-italic',
        color: '#845A49',
        marginTop: 20,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginTop: 10,
        backgroundColor: '#E0E094',
        width: 320,
        height: 160,
        borderRadius: 10,
    },
    boxImage: {
        marginLeft: 10,
        width: 120,
        height: 120,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E0E094',
        borderRadius: 10,
        backgroundColor: '#000'
    },
    boxText: {
        marginLeft: 5,
        flexDirection: 'column',
    },
    boxIntText: {
        marginLeft: 30,
        flexDirection: 'column',
    },
    text: {
        marginTop: 5,
        fontWeight: 'bold',
        color: '#845A49'
    },

    box2: {
        marginTop: 20,
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text2: {
        color: '#845A49'
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        color: '#845A49',
        fontFamily: 'brush-script-mt-italic',
        fontSize: 16,
    }
})

export default styles