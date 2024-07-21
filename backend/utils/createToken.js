import jwt from "jsonwebtoken"

const createToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })

    // Set JWT as an HTTP-Only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV != 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
    /**
     * samesite: values are:
     *  strict: only the site is allowed to send the cookies. if any other website tries to navigate to the perticular website then also it can't get the data.
     *  lax: only the site is allowed to send the cookies. if any other website tries to navigate to the perticular website then it can get the data. But without navigating the website, it itself can't send the cookies.
     *  none: Any other site can also send the cookies and receive the data.
     *  
     * 
     * youtube link: https://youtu.be/aUF2QCEudPo?si=d__ofHpP8PaWwZW8
     */

    return token
}

export default createToken