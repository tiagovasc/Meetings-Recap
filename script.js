function appendTranscript(text) {
    // Create new textarea for the section
    var textarea = document.createElement("textarea");
    textarea.className = "output-box";
    textarea.rows = 10;
    textarea.cols = 50;
    textarea.value = text;
    outputArea.appendChild(textarea);

    // Create new copy button for the section
    var button = document.createElement("button");
    button.className = "btn";
    button.innerHTML = "Copy";
    button.onclick = function() {
        textarea.select();
        document.execCommand("copy");
    }
    outputArea.appendChild(button);
}

function splitTranscript() {
    var transcript = document.getElementById('transcript').value;
    var summary = document.getElementById('summary').value;

    // Clear old output
    document.getElementById('outputArea').innerHTML = '';

    var timestamps = summary.match(/\d+:\d+/g);

    for (var i = 0; i < timestamps.length; i++) {
        var start = timestamps[i];
        var end = timestamps[i+1];

        var section;
        if (end) {
            var pattern = new RegExp(start + '[\\s\\S]*?' + end);
            section = transcript.match(pattern)[0];
        } else {
            var pattern = new RegExp(start + '[\\s\\S]*');
            section = transcript.match(pattern)[0];
        }

        appendTranscript(section);
    }
}

document.getElementById('runBtn').onclick = splitTranscript;
