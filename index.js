/* 
    Bonus Challenge 

    Fetch the list of 642 open APIs from
        https://api.publicapis.org/entries
        
    Create a my-api component
        display the name and category of the API,
        the description, and also display the type 
        of Auth (if any) and whether or not the API 
        supports HTTPS
    
    Use CSS Grid to style my-api
        The title and category should be 
        listed as Title (Category) 
        and should link to the API docs
        
    The grid should have 4 rows
        3rem, 1rem, 4rem, 3rem respectively
        and 3 columns each 1/3rd of available width
        
    Finally, display all of the APIs
*/

async function getAPIs() {
    const response = await fetch('https://api.publicapis.org/entries');
    const myAPIs = await response.json();
    return myAPIs;
}

function displayAPIs(myAPIs) {
    console.log(myAPIs)
        document.body.innerHTML = myAPIs.entries.map(getAPIhtml).join("");
}

function getAPIhtml(myAPI) {
    const auth = myAPI.Auth === ""?"NONE":myAPI.Auth;
    return `<div class="my-api">
                <div class="my-api-name"><a href="${myAPI.Link}" target="_blank">${myAPI.API}</a> (${myAPI.Category})</div>
                <div class="my-api-description">Description: ${myAPI.Description}</div>
                <div class="my-api-auth">Auth: ${auth}</div>
                <div class="my-api-https">HTTPS: ${myAPI.HTTPS}</div>
            </div>
          `
}

getAPIs()
    .then(displayAPIs)
    .catch(e => console.log(`Error: ${e}`))