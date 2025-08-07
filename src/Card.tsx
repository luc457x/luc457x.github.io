import { useState } from 'react';

function Card() {
    const [Flipped, setFlipped] = useState(false);
    const handleFlip = () => {
        setFlipped(!Flipped);
    };

    return (
        <>
            <div className="card">
                <div className={`inner ${Flipped ? 'flip' : ''}`} onClick={handleFlip}>
                    <div className="card-front">
                        <img src="/logo.png" alt="logo" />
                        <h1>Lucas Teixeira</h1>
                        <div className="roles">
                            <p>Data Scientist<br />&<br />Dev. Full Stack</p>
                        </div>
                    </div>
                    <div className="card-back">
                        <img src="./qr.gif" alt="QR Code" />
                        <div className="contacts">
                            <div className="contact-item">
                                <img src="./wpp.png" alt="whatsapp" />
                                <a href="https://api.whatsapp.com/send?phone=5522998923719" target="_blank">+55 (22) 99892-3719</a>
                            </div>
                            <div className="contact-item">
                                <img src="./e-mail.webp" alt="e-mail" />
                                <a href="mailto:contato@lucas7x.win" target="_blank">contato@lucas7x.win</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;