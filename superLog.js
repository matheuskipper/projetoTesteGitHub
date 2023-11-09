export const superLog = (message, textColor = 'green') => {
    const textStyle = `color: ${textColor}`;
    console.log(`%c${message}`, textStyle);
};