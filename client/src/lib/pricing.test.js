import test from 'node:test'
import assert from 'node:assert/strict'
import { previewIcon, totalPrice } from './pricing.js'

test('totalPrice sums base and options', () => {
    assert.equal(
        totalPrice({
            upperMaterial: 'leather',
            soleStyle: 'chunky',
            laceStyle: 'rope',
            accentTrim: 'chrome'
        }),
        79 + 45 + 52 + 12 + 18
    )
})

test('previewIcon follows upper material', () => {
    assert.equal(previewIcon('knit'), '🧶')
    assert.equal(previewIcon('unknown'), '👟')
})
