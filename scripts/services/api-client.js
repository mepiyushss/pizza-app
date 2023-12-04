//Network calls 

import URL from "../utils/constant.js";

async function makeNetworkCalls() {
    try {
        const response = await fetch(URL);
        const object = await response.json();
        // console.log("url is called",URL);
        return object;
    }
    catch(err){
        console.log("Error: " ,err);
        throw err;

    }
    
};
export default makeNetworkCalls;