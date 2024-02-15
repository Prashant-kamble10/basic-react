import QRCode from "react-qr-code";
import { useState } from "react";
import "./QrCode.css"

const QrCodeIndex = () => {
  const [text, setText] = useState(" ");
  const [qrcode, setQrcode] = useState(" s");

  function handleClick() {
    setQrcode(text);
    setText(" ");
  }

  return (
    <>
      <div className="general">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="q-code"
          value={text}
          placeholder="Enter text here"
        />
        <button disabled={text === " " ? true :false} onClick={handleClick}>Submit</button>
      </div>

      <div className="qrcode">
        <QRCode id="qr-code-value" value={qrcode} />
      </div>
    </>
  );
};

export default QrCodeIndex;
