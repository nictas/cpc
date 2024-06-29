// From: https://github.com/nictas/cpc

const POST_URL = "<POST_URL>"; // Make sure to replace this placeholder with the Discord webhook URL.

function onSubmit(e) {
    const form = FormApp.getActiveForm();
    const formId = form.getId();
    const responseId = e.response.getId();
    const responseUrl = `https://docs.google.com/forms/d/${formId}/edit#response=${responseId}`;

    const options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify({
            "content": `A new application has been submitted! You can view the response [here](${responseUrl}).`
        })
    };

    UrlFetchApp.fetch(POST_URL, options);
};
