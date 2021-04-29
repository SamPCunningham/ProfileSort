import { addNewProfile, getProfiles } from '../controllers/profileController';

const routes = (app) => {
    app.route('/profiles')
        .get(getProfiles)
        
        .post(addNewProfile);
}

export default routes;