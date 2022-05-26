const sum = (acc: number, crr: number) => acc + crr

const currency = (value: number) => new Intl
    .NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
    .format(value)

const randomPhoto = (width: number, height: number, range: number = 10) => {
    return `http://picsum.photos/id/${(Math.random() * range).toFixed(0)}/${width}/${height}`
}

const utils = {
    sum,
    currency,
    randomPhoto
}

export default utils