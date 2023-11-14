const fetch = require('node-fetch');
async function query(data) {
    const response = await fetch(
        "https://bot-gamma.onrender.com/api/v1/prediction/74eae6d2-b917-4ed9-95d3-0d24fab8d768",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
});