from .api import API

import uvicorn

# from argparse import ArgumentParser
# argParser = ArgumentParser()

# argParser.add_argument()

j2live_api = API()

uvicorn.run(j2live_api.API)