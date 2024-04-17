export const validateInput = (text: string) => {
    return text &&
        text.trim().length !== 0
        && text.length !>= 10;
}