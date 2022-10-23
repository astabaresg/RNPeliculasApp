import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, { });

  let primary;
  let secondary;
  let detail;

  switch (colors.platform) {
    case 'android':
      // android result properties
      //   primary = colors.vibrant;
      //   secondary = colors.darkVibrant;
      //   detail = colors.dominant;
      primary = colors.dominant;
      secondary = colors.average;
      break;
    case 'ios':
      // iOS result properties
      primary = colors.primary;
      secondary = colors.secondary;
      detail = colors.detail;
      break;
    default:
      throw new Error('Unexpected platform key');
  }

  return [primary, secondary];
};
