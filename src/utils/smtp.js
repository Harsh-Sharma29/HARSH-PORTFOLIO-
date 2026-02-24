/* SmtpJS.com (Local Fix for CORS) */
export const Email = {
    send: function (a) {
        return new Promise(function (resolve, reject) {
            a.nocache = Math.floor(1e6 * Math.random() + 1);
            a.Action = "Send";

            // Form data format is more stable for CORS-less POSTs
            const formData = new URLSearchParams();
            for (const key in a) {
                formData.append(key, a[key]);
            }

            // Using fetch with 'no-cors' mode to bypass the preflight check
            fetch("https://smtpjs.com/v1/send.aspx", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: formData.toString()
            })
                .then(() => {
                    // Since 'no-cors' doesn't let us see the response "OK",
                    // we assume it's sent if the network request didn't fail.
                    resolve("OK");
                })
                .catch(err => {
                    console.error("Fetch Error:", err);
                    reject(err);
                });
        });
    }
};
