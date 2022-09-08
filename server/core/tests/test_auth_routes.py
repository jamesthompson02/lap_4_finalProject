from flask import jsonify, json

def test_register(api):
    mock_data = json.dumps({'username': 'test', 'password':'123456', 'email':'test@email.com'})
    mock_headers = {'Content-Type': 'application/json'}
    res = api.post('/auth/register', data=mock_data, headers=mock_headers)
    assert res.status == '202 ACCEPTED'


def test_login(api):
    mock_data = json.dumps({'username': 'test', 'password':'123456'})
    mock_headers = {'Content-Type': 'application/json'}
    res = api.post('/auth/login', data=mock_data, headers=mock_headers)
    assert res.status == '200 OK'

def test_get_all_users(api):
    resp = api.get('/auth/users')
    assert resp.status == '200 OK'

