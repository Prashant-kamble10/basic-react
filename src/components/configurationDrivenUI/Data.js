


const apiResponse = {
    showBoxPopUp : true,
    showDarkMode : false,
    showRandomColor : false,
    showStarRating : false,
    showTabChange : false
} 



function ConfigDrivenDataServiceCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (apiResponse) {
                resolve(apiResponse);
            } else {
                reject("Some error occurred! Please try again");
            }
        }, 500);
    });
}
  
  export default ConfigDrivenDataServiceCall;