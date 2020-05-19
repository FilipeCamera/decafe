import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#845A49',
        marginTop: 40,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        zIndex: 5
    },
    title: {
        marginTop: 10,
        fontFamily: 'brush-script-mt-italic',
        fontSize: 28,
        color: '#E0E094',
    },
    boxContainer: {
        marginTop: 20,
        height: 160,
        width: 310,
        backgroundColor: 'rgba(111,70,53, 0.7)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    image: {
        margin: 10,
        width: 120,
        height: 120,
        backgroundColor: '#FFF',
        borderRadius: 20
    },
    titleBox: {
        position: 'absolute',
        top: -25,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#E0E094'
    },
    desc: {
        position: 'relative',
        paddingBottom: 10,
        fontSize: 12,
        color: '#E0E094'
    },
    valor: {
        position: 'relative',
        top: 25,
        fontWeight: '900',
        fontSize: 14,
        color: '#E0E094',
    },
    button: {
        position: 'absolute',
        top: 20,
        right: 0,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E0E094',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    box: {
        paddingLeft: 10,
        paddingRight: 10
    },
    box2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

export default styles