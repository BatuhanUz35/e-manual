import start from "../../../assets/images/png/start.png";
import fast_backward from "../../../assets/images/png/fast_backward.png";
import fast_forward from "../../../assets/images/png/fast_forward.png";

export const ol = [
  <div>
    Oynatmaya başlamak için <img src={start} alt="Başla" className="inline-icon" /> düğmesine basın.
  </div>,
    <div>
    <img src={start} alt="Başla" className="inline-icon" /> ile oynatma işlemini duraklatın.
  </div>,
  <div>
    <img src={start} alt="Başla" className="inline-icon" /> ile oynatma işlemine devam edin.
  </div>,
  <div>
    <img src={fast_backward} alt="Geri sar" className="inline-icon" /> ile geri, <img src={fast_forward} alt="İleri sar" className="inline-icon" />
    {" "} düğmesiyle ise ileri sarın.
  </div>,
  <div>
    <img src={start} alt="Başla" className="inline-icon" /> düğmesine 5 saniye basıp oynatma işlemini durdurun.
  </div>
]