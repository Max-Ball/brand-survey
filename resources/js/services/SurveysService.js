import {useSurveyStore} from "../store/survey.js";

class SurveysService {

    async getSurveys() {
        const response = await axios.get('http://localhost/api/surveys')
        useSurveyStore().surveys = response.data
    }

}

export const surveysService = new SurveysService()
