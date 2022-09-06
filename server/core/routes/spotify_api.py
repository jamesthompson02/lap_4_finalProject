from flask import Blueprint, request, jsonify
from dotenv import load_dotenv
from os import environ
import requests
import base64   
from urllib.parse import urlencode

load_dotenv()

client_id = environ.get('client_id')
client_secret=environ.get('client_secret')

spotify_api = Blueprint('spotify_api', __name__)

@spotify_api.route('/', methods=["POST"])
def get_spotify_details():
    #The following bit of code relates to ensuring that data is received properly from 
    #the front end. 

    form = request.json
    song_name = form["songName"]
    artist_name = form["artistName"]
    from_language = form["fromLanguage"]
    to_language = form["toLanguage"]

    #The next block of code relates to generating an access token which means the spotify api
    # can actually be used. In other words, it is not enough to simply have an API key - 
    # you must use it to generate an access token which can then be used to get stuff from API.

    access_token_url = "https://accounts.spotify.com/api/token"
    client_creds = f"{client_id}:{client_secret}"
    client_creds_b64 = base64.b64encode(client_creds.encode())
    headers = {
        "Authorization": "Basic " + f"{client_creds_b64.decode()}",
        "Content-Type": "application/x-www-form-urlencoded"
    }
    r = requests.post(access_token_url, 'grant_type=client_credentials', headers=headers)
    r_json = r.json()
    access_token = r_json.get("access_token")
    API_headers = {
        "Authorization": "Bearer " + f"{access_token}"
    }
    API_url = "https://api.spotify.com/v1/search?"

    data = {
        "q": f"{artist_name} {song_name}",
        "type": "track,artist",
        "limit": 3
    }

    encoded_data = urlencode(data)
    API_url += encoded_data
    spotify_request = requests.get(API_url, headers=API_headers)
    spotify_results_json = spotify_request.json()

    # The following code relates to ensuring that when a user types in a song and artist,
    # they actually get the correct result. For example, if a user looks for the song "Hello"
    # by Adele, the first result is some random cover by some nobody. It is the second result 
    # that is the song by Adele. The best way to ensure that the correct artist and track are
    # being selected is to call the first 3 results and then choose the artist with the highest
    # followers.

    artist_data = spotify_results_json["artists"]["items"]
    track_data = spotify_results_json["tracks"]["items"]
    follower_array = []
    for each in artist_data:
        follower_array.append(each["followers"]["total"])
    index_for_track_and_artist = follower_array.index(max(follower_array))

    #The next batch of code relates to extracting the relevant info needed to make an API call
    # to the spotify recommendations endpoint. Based on the info we extract here, we will get back 
    # 3 results which have been recommended by Spotify.

    artist_spotify_id = artist_data[index_for_track_and_artist]["id"]
    track_spotify_id = track_data[index_for_track_and_artist]["id"]
    artist_genres = artist_data[index_for_track_and_artist]["genres"]
    if len(artist_genres) > 3:
        artist_genres = artist_genres[:3]
    artist_genres = ", ".join(str(x) for x in artist_genres)
    
    return jsonify(artist_spotify_id, track_spotify_id, artist_genres)
