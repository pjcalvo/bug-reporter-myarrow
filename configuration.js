var config = {
    configuration_version: 0.5,
    company_logo: "/assets/images/logo_arrow-white.png",
    bug_prefix : "BRB | ",
    
    bug_tracking_tool : {
        url: "https://arrowecommerce.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=25554&issuetype=1",
        title_id : "",
        environment_id: "",
        details_id: ""
    },
    
    testing_environments: [
        {
            name: "qa", 
            url_format: "*://qa-my.arrow.com*",
            value: "qa"
        },
        {
            name: "uat", 
            url_format: "*://uat-my.arrow.*",
            value: "uat"
        },
        {
            name: "prod", 
            url_format: "*://my.arrow.com*",
            value: "production"
        }   
    ]
}