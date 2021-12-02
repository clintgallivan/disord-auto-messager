import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    flex: 1,
    width: '100%',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,

    // backgroundColor: 'orange',
  },
  rightContainer: {
    flex: 1,
    // alignItems: 'center',
    borderRightWidth: 1,
    // backgroundColor: 'red',
  },
  rightContainerContent: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,
    // backgroundColor: 'red',
  },
  messageItem: {
    marginTop: 50,
  },
  input: {
    width: 500,
    minHeight: 40,
    // backgroundColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 4,
    marginVertical: 10,
  },
  numberInput: {
    width: 60,
    minHeight: 40,
    // backgroundColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 4,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: Colors.light.blue20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    shadowOpacity: 0.75,
    shadowRadius: 4,
    // padding: 10,
    // borderWidth:
  },
  buttonText: {
    color: Colors.light.white,
  },
  flatListItem: {
    width: 500,
    height: 30,
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.25,
    borderRadius: 4,
    padding: 2,
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  deleteButton: {
    width: 20,
    height: 20,
    // backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outputContainer: {
    width: '100%',
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 20,
    overFlow: 'visible',
  },
  copyContainer: {
    width: '50%',
    backgroundColor: Colors.light.mocha20,
    borderRadius: 4,
    shadowOpacity: 0.75,
    shadowRadius: 4,
    padding: 10,
  },
});

export default styles;
