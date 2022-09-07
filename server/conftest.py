import pytest
from core import app
from core.helpers.lyrics import click_on_page

@pytest.fixture
def api():
    api = app.test_client()
    return api

@pytest.fixture
def source():
    source = click_on_page('hello', 'adele')
    return source
