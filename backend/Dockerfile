FROM python:3

ENV PYTHONDONTWRITEBYTECODE=1

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY django_project/requirements.txt /app/

RUN pip install -r requirements.txt

COPY . /app/

ENV POSTGRES_NAME=postgres

ENV POSTGRES_USER=postgres

ENV POSTGRES_PASSWORD=postgres

CMD [ "python","manage.py","runserver","0.0.0.0:8000" ]