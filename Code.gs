// From: https://github.com/nictas/cpc

const POST_URL = "<POST_URL>"; // Make sure to replace this placeholder with the Discord webhook URL.

function onSubmit(e) {
    const form = FormApp.getActiveForm();
    const formId = form.getId();
    const responseUrl = `https://docs.google.com/forms/d/${formId}/edit#responses`;
    const characterName = e.response.getItemResponses()[1].getResponse(); // Specific to the CPC application form. Change this if you're using this script for any other purpose.

    const options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify({
            "content": `A new application has been submitted by ${characterName}! You can view all form responses [here](${responseUrl}).`
        })
    };

    UrlFetchApp.fetch(POST_URL, options);
};
