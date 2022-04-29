import {StyleSheet, Dimensions} from 'react-native';

export const colors = {
  main: '#1E63CB',
  income: '#A5D76E',
  expense: '#D2555A',
  savings: '#FFC36E',
  text: '#262626',
};

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  screenContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    minHeight: '100%',
  },
  iconView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.main,
    alignItems: 'center',
    backgroundColor: colors.main,
  },
  icon: {
    borderWidth: 2,
    borderColor: '#ffffff',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 115,
    paddingLeft: 5,
    borderRadius: 100,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  subtitle: {
    color: colors.text,
    fontSize: 18,
  },
  form: {
    flex: 2,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    borderRadius: 5,
    padding: 16,
  },
  forgot: {
    // marginTop:16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btn: {
    marginTop: 16,
    padding: 16,
    borderRadius: 20,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignSelf: 'center',
    width: Dimensions.get('window').width / 2,
  },
  signUp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    // marginBottom:16
  },
});

export const itemStyles = {
  item: {
    borderWidth: 2,
  },
  txtInput: {
    fontSize: 16,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
  },
};

export const getHeaderOptions = (
  backgroundColor = '#1E63CB',
  headerTintColor = 'white',
  headerTitleAlign = 'center',
  headerStyle,
) => ({
  headerTintColor,
  headerTitleAlign,
  headerStyle: {
    backgroundColor,
    ...headerStyle,
  },
});
