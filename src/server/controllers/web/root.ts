import { PORTFOLOIO_ROUTE } from "../../../shared/routes";

function rootPage(req, res) {
    return res.redirect(PORTFOLOIO_ROUTE)
}

export default rootPage