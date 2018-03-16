import createStyles, {
  colors,
  dimensions,
  fonts,
  margin,
  padding
} from '../../../baseStyles';

export default (singleArtistInfo = createStyles({
  originalArtistHeader: {
    color: colors.textDefault,
    fontFamily: fonts.secondary,
    fontSize: fonts.xxl,
    fontWeight: 'bold',
  },
  originalArtistTagContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    padding: padding.sm
  },
  originalArtistTagText: {
    backgroundColor: 'red',
    alignSelf: 'center',
    height: undefined,
    width: undefined
  },
  resultContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    padding: padding.sm
  },
  resultInfo: {
    backgroundColor: 'red',
    alignSelf: 'center',
    flex: 3,
    height: undefined,
    width: undefined
  },
  resultName: {
    color: colors.textDefault,
    fontFamily: fonts.secondary,
    fontSize: fonts.lg,
    fontWeight: 'bold'
  },
  match: {
    color: colors.quadrary,
    fontFamily: fonts.secondary,
    fontSize: fonts.md
  }
}));
