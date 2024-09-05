import FavoriteIcon from '@mui/icons-material/Favorite';

export default function About() {
    return (
        <div>
            <div className="outerBox">
                <div className="innerBox about">
                    <div className="relativeDiv">
                        <div className="storyHeader">
                            <img id="leaves" src="images/leaves_sign.png"/>
                            <h3>Petr & Lucie</h3>
                        </div>
                        <div className="timeline">
                            <div className="leftColumn">
                                <div className="year">
                                    <p>2017</p>
                                </div>
                                <div className="story">
                                    <p>První společné bydlení</p>
                                </div>
                                <div className="year">
                                    <p>2020</p>
                                </div>
                                <div className="story">
                                    <p>Máme pejska!</p>
                                </div>
                                <div className="year">
                                    <p>2023</p>
                                </div>
                                <div className="story">
                                    <p>Stavíme dům!</p>
                                </div>
                            </div>
                            <div className="timelineLine">
                                <FavoriteIcon className='heartEmoji'/>
                                <FavoriteIcon className='heartEmoji'/>
                                <FavoriteIcon className='heartEmoji'/>
                                <FavoriteIcon className='heartEmoji'/>
                                <FavoriteIcon className='heartEmoji'/>
                                <FavoriteIcon className='heartEmoji'/>
                            </div>
                            <div className="rightColumn">
                                <div className="story">
                                    <p>Osudová procházka Grébovkou</p>
                                </div>
                                <div className="year">
                                    <p>2019</p>
                                </div>
                                <div className="story">
                                    <p>Rok cestování po Asii</p>
                                </div>
                                <div className="year">
                                    <p>2022</p>
                                </div>
                                <div className="story">
                                    <p>Řekla ANO!</p>
                                </div>
                                <div className="year">
                                    <p>2024</p>
                                </div>
                            </div>
                        </div>
                        <img id='brideImg' src='images/bride.jpg'/>
                        <img id='groomImg' src='images/groom.jpg'/>
                    </div>
                </div>
            </div>
        </div>
    )
}