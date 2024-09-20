from fastapi import FastAPI
from .constants import Jinja2RenderRequest
from .ansible import renderTemplate


class API:
    def __init__(self) -> None:
        self.API = FastAPI()

        @self.API.get("/")
        async def root():
            return {"message": "Hello World"}

        @self.API.post(path="/")
        async def RenderJ2(params: Jinja2RenderRequest):
            yaml = params.YAML
            jinja = params.Jinja
            output, errored = renderTemplate(yaml, jinja)
            if errored == False:
                return { "error": False, "message": output }
            else:
                return { "error": True, "message": output }
