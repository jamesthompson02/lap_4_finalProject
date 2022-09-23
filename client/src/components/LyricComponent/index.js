import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { AiFillCaretRight, AiOutlinePause, AiFillBackward } from 'react-icons/ai';
import { loading } from "../../actions";
import LoadingSpinner from "../LoadingSpinner";
import './style.css'

const LyricComponent = () => {

    const artistName = useSelector(state => state.search.artist);
    const trackName = useSelector(state => state.search.track);
    const loadingStatus = useSelector((state) => state.search.loading);
    const dispatch = useDispatch();

    const [spanishLyrics, setSpanish] = useState([]);
    const [englishLyrics, setEnglish] = useState([]);
    const [url, setUrl] = useState("");

    function setSpanishLyrics(lyrics) {
        return setSpanish(lyrics)
    }

    function setEnglishLyrics(lyrics) {
        return setEnglish(lyrics)
    }

    function setYoutubeUrl(url) {
        return setUrl(url);
    }


    useEffect(() => {
        const getLyrics = async () => {
            const { data } = await axios.post("https://fast-gorge-25731.herokuapp.com/lyrics/", {
                "songName": trackName,
                "artistName": artistName
            })
            const youTubeUrl = data.embed;
            const english = data.english;
            const spanish = data.spanish;
            dispatch(loading(false))
            setYoutubeUrl(youTubeUrl);
            setSpanishLyrics(spanish);
            setEnglishLyrics(english);
        }
        getLyrics();

    }, [artistName])



    const mixArray = (english, spanish) => {
        let arr = []
        for (let i = 0; i < english.length; i++) {
            if (english[i] === ' ' && spanish[i] === ' ') {
                arr.push({ lang: 'e', line: english[i] })
            } else {
                arr.push({ lang: 'e', line: english[i] })
                arr.push({ lang: 's', line: spanish[i] })
            }
        }
        return arr
    }

    let action;

    const startRolling = () => {
        if (!action) {
            action = setInterval(() => {
                var element = document.getElementById("myDIV");
                var content = document.getElementById("content");
                if ((element.scrollTop) === content.offsetHeight) {
                    element.scrollTop = 0;
                    clearInterval(startRolling)
                } else {
                    element.scrollTop += 1;
                }
            }, 50)
        }
    }
        ;

    const stopRolling = () => {
        clearInterval(action);
        action = null;
    }

    const backToTop = () => {
        var element = document.getElementById("myDIV");
        element.scrollTop = 0;
    }

    if (loadingStatus) {
        return <LoadingSpinner />
    }

    return (
        <div className='key-content-from-lyrics-api'>
            <div id='youtube-embed-box'>
                <iframe width="100%" height="100%" src={url}></iframe>
            </div>
            <br></br>
            <div id="teleprompter-group">
                <div className="teleprompter-button-group">
                    <span className="teleprompter-lyrics-title-text">Lyrics</span>
                    <button className="teleprompter-button" onClick={startRolling}><AiFillCaretRight /></button>
                    <button className="teleprompter-button" onClick={stopRolling}><AiOutlinePause /></button>
                    <button className="teleprompter-button" onClick={backToTop}><AiFillBackward /></button>
                </div>

                <div id="myDIV">
                    <div id="content">
                        {mixArray(englishLyrics, spanishLyrics).map((obj, index) => {
                            if (obj.line === " ") {
                                return <br></br>
                            } else if (obj.lang === "e") {
                                return <div key={index} className='english-lyric'>{obj.line}</div>
                            } else if (obj.lang === "s") {
                                return <div key={index} className='spanish-lyric'>{obj.line}</div>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LyricComponent;
