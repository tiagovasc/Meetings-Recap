# Transcript Separator Tool

This tool assists with creating easily digestible summaries of transcriptions from Otter AI. It operates by leveraging the capabilities of OpenAI's large language models to separate the transcription into logical sections, based on the changing topics of discussion.

## Workflow ## 

1. Generate your transcript: Use Otter AI to generate your transcript.

2. Divide your transcript: Paste your transcript into Claude AI, using the following prompt: "This is a conversation about [...]. The context of this conversation is [...]. Divide the transcript below into several sections based on the topic discussed. The output should be the starting timestamp of that section with a 00:00 format, followed by a sentence summarizing that section."

3. Paste your divided transcript: The output from Claude AI should be copied and pasted into the Summary box in our tool.

4. Paste your original transcript: The original transcript from Otter AI should be copied and pasted into the Transcript box in our tool.

5. Run the tool: After clicking the Run button, our tool will split each section based on the timestamp, creating a new text box for each section. You can now easily copy the content of each box.

6. Generate Summaries: Use OpenAI's Chat GPT 3.5 to generate a concise summary of each section. Paste the text of each section into GPT 3.5.

## Rationale ## 

The advantage of this approach is that it capitalizes on the strengths of both Claude AI and OpenAI's GPT 3.5. Claude AI's large context window enables efficient and effective content division, while GPT 3.5's cheaper cost makes it ideal for generating summaries of each individual section. Thus, this tool offers a cost-effective and efficient solution for processing and summarizing lengthy transcripts.
