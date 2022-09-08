// import DeleteIcon from '@mui/icons-material/Delete';
// import MenuIcon from '@mui/icons-material/Menu';
// import Btn from '../Btn';
import './dashboard.css';
import '../../components/Navbar/styles.css';
import Navbar from '../../components/Navbar';
import SearchForm from '../../components/SearchForm';
import SongCard from '../../components/SongCard';
//import LoadingSpinner from '../../components/LoadingSpinner';
import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

const DashboardPage = () => {

    //   const [loading, setloading] = useState(false);

    //   if(loading) {
    //     return <LoadingSpinner />
    // }

    return (
        <>
            <div className="dashboard-main-div">

                <Navbar />

                {/* form  */}
                <div className='searchform-div'>
                    <SearchForm />
                </div>

                <div className='recommend-container'>
                    <ul className="grid-container">
                        <li className="grid-item">
                            <SongCard title='Hello' artist='Adele' albumArtUrl='https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png' album='25' />
                        </li>
                        <li className="grid-item">
                            <SongCard title='Shape of You' artist='Ed Sheeran' albumArtUrl='https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png' album='Divide' />
                        </li>
                        <li className="grid-item">
                            <SongCard title='Wonderwall' artist='Oasis' albumArtUrl='https://i.scdn.co/image/ab67616d0000b27385e5dcc05cc216a10f141480' album="What's the Story Morning Glory?" />
                        </li>
                        <li className="grid-item">
                            <SongCard title='Never Gonna Give You Up' artist='Rick Astley' albumArtUrl='https://upload.wikimedia.org/wikipedia/en/1/1c/Rick_Astley_-_Whenever_You_Need_Somebody.png' album='Whenever You Need Somebody' />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default DashboardPage;
