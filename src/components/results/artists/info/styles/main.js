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
    fontFamily: fonts.secondary,
    fontSize: fonts.xxl,
    marginLeft: margin.sm
  },

  infoHeader: {
    color: colors.textDefault,
    fontFamily: fonts.bold,
    fontFamily: fonts.secondary,
    fontSize: fonts.md
  },

  playCount: {
    color: colors.textDefault,
    fontFamily: fonts.italic,
    fontSize: fonts.sm
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
    height: dimensions.fullHeight * 0.4,
    width: dimensions.fullWidth * 0.7,
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
  renderedAlbumContainer: {
    paddingVertical: padding.sm,
    paddingHorizontal: padding.sm,
    marginVertical: margin.xs,
    marginHorizontal: margin.sm,
    width: 150
  },

  renderedAlbumText: {
    color: colors.textDefault,
    fontFamily: fonts.bold
  },

  albumMetaFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  albumsMainBackground: {
    backgroundColor: colors.white
  },

  albumName: {
    color: colors.textDefault,
    fontFamily: fonts.secondary,    
    fontSize: fonts.xl,
  },

  albumArtistNameHead: {
    color: colors.textDefault,
    fontFamily: fonts.bold,
    fontSize: fonts.md
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
    marginRight: margin.sm
  },
  trackHead: {
    color: colors.white,
    fontFamily: fonts.primary,
    marginLeft: margin.md
  },
  trackName: {
    color: colors.textDefault,
    fontFamily: fonts.bold    
  },
  trackPlays: {
    color: colors.textDefault,
    fontFamily: fonts.italic
  },
  trackAlbumContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },

  trackAlbumName: {},

  length: {
    color: colors.quadrary,
    fontFamily: fonts.italic
  },

  // bio
  bioText: {
    color: colors.textDefault,
    fontFamily: fonts.primary,
    fontSize: fonts.md
  }
}));
