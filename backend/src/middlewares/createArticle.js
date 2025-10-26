import crypto from 'crypto'

export default function createArticle (arg1, arg2, arg3) {
    const arg4 = Math.floor(1000 + Math.random() * 9000);
    let input = `${arg1}${arg2}${arg3}${arg4}`

    const hash = crypto.createHash('sha256').update(input).digest('hex').slice(0, 8);
    return hash
}