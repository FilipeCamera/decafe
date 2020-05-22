import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#845A49',
        marginTop: 40,
        //borderTopLeftRadius: 50,
        //borderTopRightRadius: 50,
        alignItems: 'center',
        paddingBottom: 50
    },
    title: {
        marginTop: 10,
        fontFamily: 'brush-script-mt-italic',
        fontSize: 28,
        color: '#E0E094',
    },
    boxContainer: {
        flex: 1,
        marginTop: 20,
        width: 320,
        height: 200,
        backgroundColor: 'rgba(111,70,53, 0.7)',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
    },
    image: {
        margin: 10,
        width: 140,
        height: 180,
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    titleBox: {
        position: 'absolute',
        top: 15,
        left: 160,
        width: 140,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E0E094',
    },
    desc: {
        width: 140,
        fontSize: 12,
        color: '#E0E094',
        textAlign: 'justify'
    },
    valor: {
        position: 'absolute',
        left: 160,
        bottom: 20,
        fontWeight: '900',
        fontSize: 15,
        color: '#E0E094',
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E0E094',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    box: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'column',
    },
})

export default styles