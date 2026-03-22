import { BASE_PRICE, OPTIONS } from './options.js'

const optionPrice = (group, value) => {
    const found = OPTIONS[group].find((o) => o.value === value)
    return found ? found.price : 0
}

export const totalPrice = (selection) => {
    return (
        BASE_PRICE +
        optionPrice('upperMaterial', selection.upperMaterial) +
        optionPrice('soleStyle', selection.soleStyle) +
        optionPrice('laceStyle', selection.laceStyle) +
        optionPrice('accentTrim', selection.accentTrim)
    )
}

export const previewIcon = (upperMaterial) => {
    const found = OPTIONS.upperMaterial.find((o) => o.value === upperMaterial)
    return found ? found.icon : '👟'
}
