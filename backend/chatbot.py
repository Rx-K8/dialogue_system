import os

import torch
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import (AutoModelForCausalLM, AutoTokenizer,
                          BitsAndBytesConfig)

#os.environ["CUDA_VISIBLE_DEVICES"] = "0"

### モデル部分 ###
model_id = "rinna/japanese-gpt-neox-3.6b-instruction-ppo"
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_use_double_quant=False,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.float16,
)
model = AutoModelForCausalLM.from_pretrained(
    "./gozaru-lora",
    quantization_config=bnb_config,
    device_map="auto",
)
tokenizer = AutoTokenizer.from_pretrained(
    model_id,
    use_fast=False,
)


def get_chatbot_message(user_input):
    prompt = f"[INST]{user_input}[/INST]"

    token_ids = tokenizer.encode(prompt, add_special_tokens=False, return_tensors="pt")

    with torch.no_grad():
        output_ids = model.generate(
            token_ids.to(model.device),
            do_sample=True,
            max_new_tokens=128,
            temperature=0.7,
            repetition_penalty=1.1,
            pad_token_id=tokenizer.pad_token_id,
            bos_token_id=tokenizer.bos_token_id,
            eos_token_id=tokenizer.eos_token_id,
        )

    output = tokenizer.decode(output_ids.tolist()[0][token_ids.size(1) :])
    output = output.replace("<NL>", "\n")
    return output

### API関連 ###
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
    processed_text = get_chatbot_message(processing_text)
    output_message = Message(text=processed_text)
    return output_message
