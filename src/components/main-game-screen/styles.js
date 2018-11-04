import { StyleSheet } from 'react-native';
import colors from '../colors';

const style = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    padding: 5,
    paddingTop: 30,
  },
  nameStyle: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Chewy',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  actionLabel: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Chewy',
  },

  /* Animation */
  container2: {
    flex: 4,
    flexDirection: 'column',
    paddingBottom: 30,
    marginBottom: 20,
  },

  /* Icons */
  container3: {
    flex: 3,
    flexDirection: 'column',
    padding: 5,
    paddingTop: 20,
  },
  iconRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },

  /* Restart game screen */
  container4: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.darkgreen,
    paddingTop: 200,
  },

  message1: {
    fontFamily: 'Chewy',
    fontSize: 35,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  message2: {
    fontFamily: 'Chewy',
    fontSize: 30,
    color: colors.midgreen,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default style;
