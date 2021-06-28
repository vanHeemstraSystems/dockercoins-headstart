ARG IMAGE_REPOSITORY
FROM ${IMAGE_REPOSITORY}/python:alpine

# See https://stackoverflow.com/questions/29261811/use-docker-compose-env-variable-in-dockerbuild-file
ARG PROXY_USER
ARG PROXY_PASSWORD
ARG PROXY_FQDN
ARG PROXY_PORT

#ENV HTTP_PROXY="http://${PROXY_USER}:${PROXY_PASSWORD}@${PROXY_FQDN}:${PROXY_PORT}"
#ENV HTTPS_PROXY="http://${PROXY_USER}:${PROXY_PASSWORD}@${PROXY_FQDN}:${PROXY_PORT}"

RUN pip install Flask --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host=files.pythonhosted.org
COPY rng.py /
CMD ["python", "rng.py"]
EXPOSE 80
