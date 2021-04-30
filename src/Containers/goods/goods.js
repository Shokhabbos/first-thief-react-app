import { Link } from "react-router-dom";

const Goods = ({img,text,title,time,price}) => {


  return (
   <Link  to="/goods" >
      <div className="card" >
        <div className="card-top">
          <img className="card-img" src={img} alt="img" />
        </div>
        <div className="card-bottom">
          <h4 className="card-title">{title}</h4>
          <span className="card-time">{time}</span>
          <span className="card-price">{price}</span>
        </div>
      </div>
   </Link>

  )
}
export default Goods;