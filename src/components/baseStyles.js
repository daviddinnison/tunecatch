import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors = {
  primary: '#1e1e1e',
  secondary: '#fdfdfd', 
  tertiary: '#F0B917', 
  quadrary: '#808080',
  white: '#FFFFFF',
  offWhite: '#F9F8EB',
  textDefault: '#323232',
  affirmative: '#008000',
  negative: '#800000'
};

export const padding = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const margin = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const fonts = {
  sm: 14,
  md: 18,
  lg: 22,
  xl: 28,
  xxl: 36,
  primary: 'Roboto', //serif
  secondary: 'sans-serif' //sans serif
};

const baseStyles = {
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth
  },
  boxShadow: {
    elevation: 4,
  },
  header: {
    backgroundColor: 'transparent',
    fontFamily: fonts.primary,
    fontSize: fonts.xl,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    alignSelf: 'stretch',
    flex: 1,
    height: undefined,
    width: undefined
  },
  subHeader: {
    backgroundColor: 'transparent',
    fontFamily: fonts.primary,
    fontSize: fonts.md,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  leftMargin: {
    marginLeft: margin.sm
  },
  mainSection: {
    paddingVertical: padding.xs,
    paddingHorizontal: padding.xs
  },
  mainText: {
    fontFamily: fonts.primary
  },
  renderedTags: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: margin.sm,
    marginLeft: margin.sm
  },
  shadow: {
    // textShadowColor: colors.quadrary,
    // textShadowOffset: {
    //   height: 2,
    //   width: 2
    // },
    // textShadowRadius: 15
    textShadowColor: colors.quadrary,
    textShadowOffset: {
      height: 2,
      width: 2
    },
    textShadowRadius: 25
  },

  renderedTagSingle: {
    borderColor: colors.quadrary,
    borderWidth: 2,
    color: colors.quadrary,
    fontFamily: fonts.primary,
    fontSize: fonts.sm,
    margin: margin.xs,
    padding: padding.xs
  },
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create({ ...baseStyles, ...overrides });
}
