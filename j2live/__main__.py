from .api import API
from uvicorn import Server, Config

import asyncio, subprocess

j2live_api = API()


async def main():
    async with asyncio.TaskGroup() as taskGroup:
        taskGroup.create_task(run_frontend())
        taskGroup.create_task(run_backend())


async def run_frontend():
    subprocess.Popen(["node", ".next/standalone/server.js"])


async def run_backend():
    config = Config(app=j2live_api.API)
    server = Server(config=config)
    await server.serve()


asyncio.run(main())
