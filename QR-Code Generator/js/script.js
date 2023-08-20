    function generator() {
            const textInput = document.getElementById("textInput").value;
            const qrcodeOutput = document.getElementById("output");

            qrcodeOutput.innerHTML = "";

            new QRCode(output, {
                text: textInput,
                width: 300,
                height: 300
            });
        }