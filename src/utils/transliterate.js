export function transliterate(text) {
    const cyrillic = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const latin = 'abvgdeejzijklmnoprstufhzcss_y_eua';
    return text.split('').map(char => {
        const index = cyrillic.indexOf(char.toLowerCase());
        return index !== -1 ? latin[index] : char;
    }).join('');
}