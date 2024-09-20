from .api import API

import uvicorn, asyncio

j2live_api = API()

taskGroup = asyncio.TaskGroup()

async def main():
    async with asyncio.TaskGroup() as task:
        task.create_task(uvicorn.run(j2live_api.API))

main()