export const getHeaderOptions = (
  backgroundColor = '#1E63CB',
  headerTintColor = 'white',
  headerTitleAlign = 'center',
  headerStyle,
) => ({
  headerTintColor,
  headerTitleAlign,
  headerStyle: {
    backgroundColor,
    ...headerStyle,
  },
});
