import createStyles, { colors, fonts, margin, padding } from "../baseStyles";
export default (singleArtistInfo = createStyles({
  input: {
    backgroundColor: colors.white,
    marginVertical: margin.lg
  },
  button: {
    backgroundColor: colors.primary
  },
  appHeader: {
    color: colors.primary,
    fontSize: fonts.xxl,
    fontFamily: fonts.primary,
    padding: 0,
    margin: 0
  },
  appSubHeader: {
    color: colors.primary,
    fontSize: fonts.lg,
    fontFamily: fonts.primary,
    padding: 0,
    margin: 0
  },
}));
