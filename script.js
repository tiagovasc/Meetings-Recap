window.onload = function() {
    document.getElementById("runBtn").onclick = function() {
        var transcript = document.getElementById("transcript").value.split('\n');
        var summary = document.getElementById("summary").value.split('\n');

        var outputArea = document.getElementById("outputArea");
        outputArea.innerHTML = ""; // Clear previous results

        var timestamps = [];
        summary.forEach(function(line) {
            var timestamp = line.match(/(\d+:\d+)/g);
            if (timestamp) {
                timestamps.push(timestamp[0]);
            }
        });

        var currentTimestampIndex = 0;
        var currentTranscript = "";
        transcript.forEach(function(line) {
            var timestamp = line.match(/(\d+:\d+)/g);
            if (timestamp) {
                timestamp = timestamp[0];
                if (timestamp == timestamps[currentTimestampIndex]) {
                    if (currentTranscript != "") {
                        appendTranscript(currentTranscript);
                        currentTranscript = "";
                    }
                    currentTimestampIndex++;
                }
            }
            if (currentTimestampIndex > 0) {
                currentTranscript += line + "\n";
            }
        });

        // Append the last transcript section
        if (currentTranscript != "") {
            appendTranscript(currentTranscript);
        }

        function appendTranscript(text) {
            // Create new textarea for the section
            var textarea = document.createElement("textarea");
            textarea.rows = 10;
            textarea.cols = 100;
            textarea.value = text;
            outputArea.appendChild(textarea);

            // Create new copy button for the section
            var button = document.createElement("button");
            button.innerHTML = "Copy";
            button.onclick = function() {
                textarea.select();
                document.execCommand("copy");
            }
            outputArea.appendChild(button);
        }
    }
}
