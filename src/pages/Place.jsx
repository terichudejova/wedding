export default function Place() {
    return (
        <div className="outerBox">
            <div className="innerBox place">
                <div className="placeColumn">
                    <h2>Jak se k nám dostanete?</h2>
                    <div className="line"></div>
                    <p>Náš den se uskuteční v Modré stodole v Horoměřicích u Prahy.</p>
                    <p>Parkovat se dá zadarmo přímo v areálu.</p>
                    <p>MHD: ze zastávky Bořislavka autobusem 316, nebo ze zastávky Dejvická autobusem 355.</p>
                    <div className="mapLink">
                        <a href="https://www.google.cz/maps/dir//Spojovac%C3%AD+918,+252+62+Horom%C4%9B%C5%99ice/@50.1331002,14.3322918,17z/data=!4m18!1m8!3m7!1s0x470bc07297e18141:0x855dabfcaefcb0c8!2zU3Bvam92YWPDrSA5MTgsIDI1MiA2MiBIb3JvbcSbxZlpY2U!3b1!8m2!3d50.1331002!4d14.3348667!16s%2Fg%2F11c2csh26s!4m8!1m0!1m5!1m1!1s0x470bc07297e18141:0x855dabfcaefcb0c8!2m2!1d14.3348667!2d50.1331002!3e3?entry=ttu&g_ep=EgoyMDI0MDkwMi4wIKXMDSoASAFQAw%3D%3D" target="_isBlank"><img id="map" src="images/map.png"/></a>
                    </div>
                </div>
                <div className="timeColumn">
                    <h2>Časový harmonogram</h2>
                    <div className="line"></div>
                    <h3>Sobota 7. června 2025</h3>
                    <div className="prijezd card">
                        <img src="images/welcome.png"/>
                        <div className="popis">
                            <h4>Příjezd 11:00</h4>
                            <p>Těšíme se na váš včasný příjezd.</p>
                        </div>
                    </div>
                    <div className="line2"></div>
                    <div className="obrad card">
                        <div className="popis">
                            <h4>Obřad 12:00</h4>
                            <p>V pravé poledne si řekneme svá ano.</p>
                        </div>
                        <img src="images/rings.png" />
                    </div>
                    <div className="line2"></div>
                    <div className="obed card">
                        <img src="images/cutlery.png"/>
                        <div className="popis">
                            <h4>Slavnostní oběd 13:00</h4>
                            <p>Čeká nás společná polévka a bohatý raut.</p>
                        </div>
                    </div>
                    <div className="line2"></div>
                    <div className="krajeni card">
                        <div className="popis">
                            <h4>Krájení dortu 15:00</h4>
                            <p>Dostane se čas i na výborný dort.</p>
                        </div>
                        <img src="images/cake.png"/>
                    </div>
                    <div className="line2"></div>
                    <div className="zabava card">
                        <img src="images/bride_groom3.png"/>
                        <div className="popis">
                            <h4>Zábavný program 16:00</h4>
                            <p>Jsme napjatí, co nás čeká, stejně jako vy.</p>
                        </div>
                    </div>
                    <div className="line2"></div>
                    <div className="afterparty card">
                        <div className="popis">
                            <h4>Afterparty</h4>
                            <p>Zábava večer nekončí, teprve začíná!</p>
                        </div>
                        <img src="images/alcohol.png"/>
                    </div>
                </div>
            </div>  
        </div>
    )
}