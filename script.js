window.onload = function() {
    document.getElementById("runBtn").onclick = function() {
        var transcript = document.getElementById("transcript").value.split('\n');
        var summary = document.getElementById("summary").value.split('\n');

        var outputArea = document.getElementById("outputArea");
        outputArea.innerHTML = ""; // Clear previous results

        var summaries = [];
        summary.forEach(function(line) {
            var timestamps = line.match(/(\d+:\d+)/g);
            summaries.push({start: timestamps[0], end: timestamps[1]});
        });

        var currentSummary = 0;
        var currentTranscript = "";
        transcript.forEach(function(line) {
            var timestamp = line.match(/(\d+:\d+)/g)[0];
            if (timestamp == summaries[currentSummary].start) {
                currentTranscript += line + "\n";
            } else if (timestamp == summaries[currentSummary].end) {
                appendTranscript(currentTranscript);
                currentSummary++;
                currentTranscript = "";
            } else if (currentTranscript != "") {
                currentTranscript += line + "\n";
            }
        });

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
