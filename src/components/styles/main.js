import createStyles, { colors, fonts, margin, padding } from "../baseStyles";
export default (singleArtistInfo = createStyles({
  input: {
    backgroundColor: colors.white,
    marginBottom: margin.sm
  },
  button: {
    backgroundColor: colors.tertiary
  },
  appHeader: {
    backgroundColor: colors.primary,
    color: colors.tertiary,
    fontSize: fonts.xl,
    fontFamily: fonts.primary,
    fontWeight: "bold",
    padding: padding.md,
    textAlign: "center"    
  },
  appSubHeader: {
    backgroundColor: "transparent",
    fontSize: fonts.md,
    fontFamily: fonts.primary,
    fontWeight: "bold",
    marginBottom: margin.md,
    padding: padding.sm,
    textAlign: "center"    
  },
}));
