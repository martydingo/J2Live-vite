import asyncio
from uvicorn import Config, Server
from fastapi import FastAPI

app = FastAPI()

async def main():
    async with asyncio.TaskGroup() as tg:
        tg.create_task(print_123())
        tg.create_task(print_abc())

async def print_123():
    config = Config(app=app)
    server = Server(config=config)
    await server.serve()

async def print_abc():
    print("abc")

asyncio.run(main())