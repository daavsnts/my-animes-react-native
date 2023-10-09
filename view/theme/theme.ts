export const AppColors = {
    myWhite: '#F6F8FF',
    myGreen: '#1BDA5E',
    myRed: '#CB152B',
    myYellow: '#FFD61F',
    myBlack: '#0A0A0B',
    myNight: '#131315',
    myDarkGrey: '#333333',
    myLightGray: '#A3A3A3'
}

export const DarkColorScheme = {
    background: AppColors.myNight,
    onBackground: AppColors.myWhite,
    primary: AppColors.myBlack,
    onPrimary: AppColors.myWhite,
    surface: AppColors.myBlack,
    onSurface: AppColors.myWhite,
    container: AppColors.myNight,
    onContainer: AppColors.myWhite,
    error: AppColors.myRed
}

const darkTheme = true

export const ColorScheme = (darkTheme) ? DarkColorScheme : DarkColorScheme