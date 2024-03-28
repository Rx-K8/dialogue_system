from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Message(BaseModel):
    text: str


@app.post("/message/")
def get_message(input_message: Message):
    processing_text = input_message.text
    processed_text = decorate_text(processing_text)
    output_message = Message(text=processed_text)
    return output_message


def decorate_text(input: str):
    return f"***{input}***"
