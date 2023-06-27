window.onload = function() {
    document.getElementById("runBtn").onclick = function() {
        var transcript = document.getElementById("transcript").value.split('\n');
        var summary = document.getElementById("summary").value.split('\n');
        
        var outputArea = document.getElementById("outputArea");
        outputArea.innerHTML = ""; // Clear previous results

        var transcriptIndex = 0;
        for (var i = 0; i < summary.length; i++) {
            var timestamps = summary[i].match(/\d+:\d+ - \d+:\d+/g)[0].split(' - ');
            var startTimestamp = timestamps[0];
            var endTimestamp = timestamps[1];

            var transcriptSection = '';
            while (transcriptIndex < transcript.length && !transcript[transcriptIndex].includes(endTimestamp)) {
                if (transcript[transcriptIndex].includes(startTimestamp)) {
                    // Start collecting the lines for this section
                    transcriptSection += transcript[transcriptIndex] + '\n';
                }
                transcriptIndex++;
            }
            // Add the final line for this section
            transcriptSection += transcript[transcriptIndex] + '\n';
            transcriptIndex++;  // Move to the next line in the transcript
            
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
