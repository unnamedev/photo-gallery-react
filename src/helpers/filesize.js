/**
 * Convert file size for user readable format
 * @param bytes
 * @param decimalPoint
 * @returns {string}
 */
export const formatFileSize = (bytes, decimalPoint) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1000;
    const dm = decimalPoint || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}