import createStyles, { colors, fonts, margin, padding } from "../baseStyles";
export default (singleArtistInfo = createStyles({
  input: {
    backgroundColor: colors.white,
    marginVertical: margin.lg
  },
  button: {
    backgroundColor: colors.primary
  },
  buttonText: {
    color: colors.secondary,
    fontFamily: fonts.primary,
  },
  appHeader: {
    color: colors.textDefault,
    fontSize: fonts.xxl,
    fontFamily: fonts.secondary,
    padding: 0,
    margin: 0
  },
  appSubHeader: {
    color: colors.textDefault,
    fontSize: fonts.lg,
    fontFamily: fonts.secondary,
    padding: 0,
    margin: 0
  },
  appBackground: {
    backgroundColor: colors.secondary
  }
}));
