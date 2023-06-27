window.onload = function() {
    document.getElementById("runBtn").onclick = function() {
        var transcript = document.getElementById("transcript").value;
        var summary = document.getElementById("summary").value;
        var sections = summary.split('\n');
        
        var outputArea = document.getElementById("outputArea");
        outputArea.innerHTML = ""; // Clear previous results

        sections.forEach(section => {
            var timestamps = section.match(/\d+:\d+ - \d+:\d+/g)[0].split(' - ');
            var startTimestamp = timestamps[0];
            var endTimestamp = timestamps[1];
            var transcriptSection = transcript.substring(transcript.indexOf(startTimestamp), transcript.indexOf(endTimestamp));
            
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
        });
    }
}
