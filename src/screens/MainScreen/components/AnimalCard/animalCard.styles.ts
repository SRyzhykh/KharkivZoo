import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.CARD,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingBottom: 20,
    width: '100%',
    paddingHorizontal: SIZES.GUTTER * 2,
  },
  progressBar: {
    position: 'absolute',
    bottom: -7,
    alignSelf: 'center',
  },
  progressContainer: {
    alignItems: 'center',
    width: '100%',
  },
  header: {
    color: COLORS.LIGHT,
    fontWeight: '900',
    fontSize: 25,
  },
  animalImage: {
    width: SIZES.POP_WIDTH,
    height: SIZES.POP_HEIGHT,
    borderRadius: 20,
  },
  carouselContainer: {
    alignItems: 'center',
  },
  carouselText: {
    color: COLORS.LIGHT,
    fontWeight: 'bold',
    fontSize: 20,
    width: 300,
    textAlign: 'center',
  },
  carousel: {
    alignItems: 'center',
  },
});
