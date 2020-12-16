import { PORTFOLOIO_ROUTE } from "../../../shared/routes";

function rootPage(req, res) {
    console.log('redirecting....')
    return res.redirect(PORTFOLOIO_ROUTE)
}

export default rootPage