import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    title: {
        fontFamily: 'brush-script-mt-italic',
        fontSize: 26,
        color: '#845A49',
        marginTop: 10,
        textAlign: 'center'
    },
    box: {
        alignItems: 'center',
        margin: 10,
        marginTop: 10,
        backgroundColor: '#E0E094',
        width: 320,
        height: 250,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 1,
    },
    header: {
        width: '100%',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    headerTitle: {
        fontFamily: 'brush-script-mt-italic',
        fontSize: 18,
        color: '#845A49'
    },
    footer: {
        width: 315,
        height: 40,
        borderTopWidth: 1,
        borderTopColor: '#FFF',
        position: 'absolute',
        bottom: 0,
        
    },
    footerTitle: {
        position: 'absolute',
        top: 8,
        right: 80,
        fontFamily: 'brush-script-mt-italic',
        fontSize: 20,
        color: '#845A49'
    },
    box2: {
        flexDirection: 'column',
        width: 300,
    },
    box2Title: {
        color:'#845A49',
        fontFamily: 'brush-script-mt-italic',
        fontSize: 26,

    },
    box2Intern: {
        marginLeft: 30,
    },
    txtTitle: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#845A49'
    },
    mode: {
        marginLeft: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modeText: {
        color: '#845A49'
    },
    button: {
    }
})

export default styles