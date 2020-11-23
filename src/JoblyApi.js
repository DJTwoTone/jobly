import axios from "axios";


class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
        paramsOrData._token = (
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
            "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
            "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U"
        );

        console.debug("API Call:", endpoint, paramsOrData, verb);

        try {
            return (await axios({
                method: verb,
                url: `http://localhost:3001/${endpoint}`,
                [verb === 'get' ? 'params' : 'data']: paramsOrData})).data;
        } catch (e) {
            console.error("API Error:", e.response);
            let message = e.response.data.message;
            throw Array.isArray(message) ? message: [message];
        }
    }

    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company
    }

    static async getCompanies(search) {
        let results = await this.request("companies", { search });
        return results.companies;
    }
}

export default JoblyApi;