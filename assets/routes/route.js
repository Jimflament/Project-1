import { fetchUserData } from "../fetch/fetchUserData.js";
import { fetchOverviewData } from "../fetch/fetchOverviewData.js";

routie({
    '': function(){
        fetchUserData();
    },
    overview: function(){
        fetchOverviewData();
    }
 })

 export default routie;