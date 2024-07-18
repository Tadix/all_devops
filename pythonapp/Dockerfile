FROM python:3.10-alpine
WORKDIR /code
RUN apk add --no-cache gcc musl-dev linux-headers
COPY modules.txt modules.txt
RUN pip install -r modules.txt
EXPOSE 5000
COPY . .
ENTRYPOINT ["flask", "run"]