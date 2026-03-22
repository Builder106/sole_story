export const OPTIONS = {
    upperMaterial: [
        { value: 'canvas', label: 'Canvas upper', price: 0, icon: '👟' },
        { value: 'leather', label: 'Full-grain leather', price: 45, icon: '👞' },
        { value: 'knit', label: 'Engineered knit', price: 28, icon: '🧶' },
        { value: 'mesh', label: 'Breathable mesh', price: 15, icon: '🏃' }
    ],
    soleStyle: [
        { value: 'classic', label: 'Classic rubber cupsole', price: 35 },
        { value: 'chunky', label: 'Chunky midsole', price: 52 },
        { value: 'platform', label: 'Platform stack', price: 48 },
        { value: 'trail', label: 'Trail grip', price: 42 }
    ],
    laceStyle: [
        { value: 'flat', label: 'Flat cotton laces', price: 8 },
        { value: 'rope', label: 'Rope laces', price: 12 },
        { value: 'elastic', label: 'Elastic slip-on laces', price: 14 },
        { value: 'none', label: 'No laces (slip-on)', price: 0 }
    ],
    accentTrim: [
        { value: 'midnight', label: 'Midnight navy', price: 0 },
        { value: 'coral', label: 'Coral pop', price: 6 },
        { value: 'chrome', label: 'Chrome piping', price: 18 },
        { value: 'neon', label: 'Neon stitch', price: 10 }
    ]
}

export const BASE_PRICE = 79

export const DEFAULT_SELECTION = {
    name: '',
    upperMaterial: OPTIONS.upperMaterial[0].value,
    soleStyle: OPTIONS.soleStyle[0].value,
    laceStyle: OPTIONS.laceStyle[0].value,
    accentTrim: OPTIONS.accentTrim[0].value
}
