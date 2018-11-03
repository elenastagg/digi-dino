import { StyleSheet } from 'react-native';
import colors from '../colors';

const style = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    padding: 5,
  },
  container2: {
    flex: 4.5,
    flexDirection: 'column',
    padding: 5,
  },
  container3: {
    flex: 2.5,
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

  iconRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  petScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
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
