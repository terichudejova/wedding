import FormularComponent from "../FormularComponent"



export default function Contact() {
    return (
        <div>
            <div className="outerBox">
                <div className="innerBox contact">
                    <div className="formular">
                        <p>Prosíme všechny o vyplnění našeho formuláře, ať víme, zda s vámi můžeme počítat, ať se můžeme zavčas přizpůsobit vašim stravovacím návykům a ať můžeme zodpovědět na vešekeré vaše dotazy. Těšíme se na vás na svatbě!</p>
                        <FormularComponent />
                        <img id="letter" src="images/letter.png"/>
                        <img id="letter2" src="images/letter2.png"/>
                    </div>
                </div>
            </div>
            <footer>
                <a href='https://www.terezachudejova.cz/' target='_isBlank'><p>© Tereza Chudějová, 2024</p></a>
            </footer>
        </div>
    )
}