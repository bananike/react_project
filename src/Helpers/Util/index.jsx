export const replaceTelNum = (v) => {
    const result = v
        .replace(/[^0-9]/g, '')
        .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, '$1-$2-$3')
        .replace('--', '-');
    return result;
};
