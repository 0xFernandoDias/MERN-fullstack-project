import jwt from 'jsonwebtoken'
import config from 'config'

export default function (req: any, res: any, next: () => void) {
    // Get token from Header
    const token = req.header('x-auth-token') // Header key

    // Check if not token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' })
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret')) // token == right ?
        const { user }: any = decoded
        req.user = user
        next()
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' })
    }

}