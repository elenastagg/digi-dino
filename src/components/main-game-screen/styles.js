import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

const style = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    padding: 5,
  },
  container2: {
    flex: 7,
    flexDirection: 'column',
    padding: 5,
  },
  nameStyle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  actionLabel: {
    color: colors.white,
    fontSize: 14,
  },
  petScreenContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  input: {
    color: colors.midgreen,
    fontSize: 30,
    margin: 10,
  },
  buttonBackground: {
    backgroundColor: colors.blue,
    width: 90,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});
export default style;
