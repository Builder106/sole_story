export const isInvalidCombo = (selection) =>
    selection.soleStyle === 'platform' && selection.laceStyle === 'none'

export const validateSubmission = (selection) => {
    if (!selection.name || !selection.name.trim()) {
        return 'Give your pair a name.'
    }
    if (isInvalidCombo(selection)) {
        return 'Platform soles need laces for a secure fit.'
    }
    return ''
}
