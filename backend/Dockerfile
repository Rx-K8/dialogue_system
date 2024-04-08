FROM pytorch/pytorch:2.0.1-cuda11.7-cudnn8-devel
COPY . /home/backend/
WORKDIR /home/backend/
RUN pip install -U pip && \
    pip install -r requirements.txt
CMD ["uvicorn", "chatbot:app", "--reload", "--host", "0.0.0.0", "-port", "9001"]
