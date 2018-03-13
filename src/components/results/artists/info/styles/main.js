import createStyles, {
  colors,
  dimensions,
  fonts,
  margin,
  padding
} from '../../../../baseStyles';

export default (singleArtistInfo = createStyles({
  artistInfoContainer: {
    backgroundColor: colors.secondary
  },

  // header
  artistHead: {
    marginBottom: margin.md
  },

  artistName: {
    color: colors.textDefault,
    fontFamily: fonts.primary,
    fontSize: fonts.xxl,
    fontWeight: 'bold',
    marginLeft: margin.sm,
  },

  infoHeader: {
    color: colors.textDefault,
    fontFamily: fonts.secondary,
    fontSize: fonts.md,
    fontWeight: 'bold'
  },

  playCount: {
    color: colors.textDefault,
    fontFamily: fonts.secondary,
    fontSize: fonts.sm,
    fontStyle: 'italic'
  },

  // album image
  artistMetaData: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    flexWrap: 'nowrap',
    justifyContent: 'center'
  },

  artistImage: {
    height: dimensions.fullHeight * .4,
    width: dimensions.fullWidth * .7,
    marginBottom: margin.md
  },

  // tags

  // tour
  onTour: {
    fontFamily: fonts.primary,
    color: colors.affirmative
  },
  notTouring: {
    fontFamily: fonts.primary,
    color: colors.negative
  },

  // albums
  albumMetaFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  albumsMainBackground: {
    backgroundColor: colors.white
  },

  albumName: {
    color: colors.textDefault,
    fontFamily: fonts.primary,
    fontSize: fonts.xl,
    fontWeight: 'bold',
  },

  albumArtistNameHead: {
    color: colors.textDefault,
    fontFamily: fonts.primary,
    fontSize: fonts.md,
    fontWeight: 'bold',

  },

  icon: {
    height: 15,
    // paddingRight: padding.md,
    marginHorizontal: margin.sm,
    width: 15
  },

  // tracks
  tracksMainBackground: {
    backgroundColor: colors.white
  },

  trackContainer: {
    paddingVertical: padding.sm,
    paddingHorizontal: padding.sm,
    marginVertical: margin.xs,
    marginHorizontal: margin.sm
  },
  trackHead: {
    color: colors.white,
    fontFamily: fonts.primary,
    marginLeft: margin.md
  },
  trackName: {
    color: colors.textDefault,
    fontWeight: 'bold',
    fontFamily: fonts.secondary
  },
  trackPlays: {
    color: colors.textDefault,
    fontStyle: 'italic',
    fontFamily: fonts.primary
  },

  // bio
  bioText: {
    backgroundColor: colors.white,
    color: colors.textDefault,
    fontFamily: fonts.primary,
    fontSize: fonts.md,
    padding: padding.sm
  }
}));
