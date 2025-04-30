import openai

openai.api_key = "your_openai_api_key"

def get_response(question):
    prompt = f"You are an AI assistant for technical students. Answer this question accurately and helpfully: {question}"
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=150
    )
    return completion.choices[0].message["content"]