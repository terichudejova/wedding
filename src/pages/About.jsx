import FavoriteIcon from '@mui/icons-material/Favorite';

export default function About() {
    return (
        <div>
            <div className="outerBox">
                <div className="innerBox about">
                    <div className="relativeDiv">
                        <div className="petrLucie">
                            <div className="petr">
                                <div className="svatebcan svatebcanPetr"><img id='groomImg' src='images/groom.jpg'/></div>
                                <div className="omne">
                                    <h3>Petr</h3>
                                    <p>Petr je energický a optimistický člověk, který má rád sport, hudbu a neustále objevuje nové věci. Jeho smysl pro humor a nevyčerpatelná energie dělají každý den dobrodružstvím.</p>
                                </div>
                            </div>
                            <div className="lucie">
                                <div className="omne">
                                    <h3>Lucie</h3>
                                    <p>Lucie je kreativní duše, která miluje umění, knihy a dlouhé procházky přírodou. Její smysl pro detail a neuvěřitelná empatie z ní dělají tu nejmilejší osobu, kterou byste si přáli mít po svém boku.</p>
                                </div>
                                <div className="svatebcan svatebcanLucie"><img id='brideImg' src='images/bride.jpg'/></div>
                            </div>
                        </div>
                        <div className="storyHeader">
                            <img id="leaves" src="images/leaves_sign.png"/>
                            <h3>Náš příběh</h3>
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
                        {/* <img id='brideImg' src='images/bride.jpg'/>
                        <img id='groomImg' src='images/groom.jpg'/> */}
                    </div>
                </div>
            </div>
            <footer>
                <a href='https://www.terezachudejova.cz/' target='_isBlank'><p>© Tereza Chudějová, 2024</p></a>
            </footer>
        </div>
    )
}