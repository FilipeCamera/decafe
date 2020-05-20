import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#845A49',
        marginTop: 40,
        //borderTopLeftRadius: 50,
        //borderTopRightRadius: 50,
        alignItems: 'center',
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
        alignItems: 'center',
        borderRadius: 10,
    },
    image: {
        margin: 10,
        width: 120,
        height: 120,
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    titleBox: {
        position: 'relative',
        bottom: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E0E094'
    },
    desc: {
        paddingBottom: 10,
        fontSize: 12,
        color: '#E0E094'
    },
    valor: {
        fontWeight: '900',
        fontSize: 14,
        color: '#E0E094',
    },
    button: {
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
        position:'relative',
        top: 20,
        width: 140,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

export default styles