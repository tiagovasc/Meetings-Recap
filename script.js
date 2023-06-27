window.onload = function() {
    document.getElementById("runBtn").onclick = function() {
        var transcript = document.getElementById("transcript").value.split('\n');
        var summary = document.getElementById("summary").value.split('\n');

        var outputArea = document.getElementById("outputArea");
        outputArea.innerHTML = ""; // Clear previous results

        var transcriptIndex = 0;
        for (var i = 0; i < summary.length; i++) {
            var timestamps = summary[i].match(/\d+:\d+ - \d+:\d+/g)[0].split(' - ');
            var startTimestampSeconds = convertTimestampToSeconds(timestamps[0]);
            var endTimestampSeconds = convertTimestampToSeconds(timestamps[1]);

            var transcriptSection = '';
            while (transcriptIndex < transcript.length && convertTimestampToSeconds(getTimestampFromLine(transcript[transcriptIndex])) <= endTimestampSeconds) {
                transcriptSection += transcript[transcriptIndex] + '\n';
                transcriptIndex++;
            }

            // Create new textarea for the section
            var textarea = document.createElement("textarea");
            textarea.rows = 10;
            textarea.cols = 100;
            textarea.value = transcriptSection;
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

function convertTimestampToSeconds(timestamp) {
    var parts = timestamp.split(':');
    return (+parts[0]) * 60 * 60 + (+parts[1]) * 60;
}

function getTimestampFromLine(line) {
    var parts = line.split(' ');
    return parts[1];
}
