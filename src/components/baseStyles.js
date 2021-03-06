import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors = {
  primary: '#1e1e1e',
  secondary: '#ff5e3a',
  quadrary: '#808080',
  white: '#fff',
  offWhite: '#f3f3f3',
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
  primary: 'pt-serif-web-regular', //serif
  secondary: 'pt-sans-web-regular', //sans serif  
  italic: 'pt-sans-web-italic',
  bold: 'pt-sans-web-bold',
  
};

const baseStyles = {
  container: {
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth
  },
  boxShadow: {
    elevation: 4
  },
  header: {
    backgroundColor: 'transparent',
    fontFamily: fonts.bold,
    fontSize: fonts.xl,
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
    fontFamily: fonts.bold,
    fontSize: fonts.md,
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
    textShadowColor: colors.quadrary,
    textShadowOffset: {
      height: 2,
      width: 2
    },
    textShadowRadius: 5
  },

  renderedTagSingle: {
    color: colors.quadrary,
    fontFamily: fonts.primary,
    margin: margin.xs,
    paddingRight: padding.xs,
    paddingVertical: padding.xs
  },
  undefinedData: {
    color: colors.quadrary,
    fontFamily: fonts.primary,
    padding: padding.sm
  }
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create({ ...baseStyles, ...overrides });
}
