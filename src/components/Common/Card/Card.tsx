import { Rating } from '@mui/material';
import styled from './Card.module.scss';
export default function Card(inf: {
  imgSrc: string;
  titleHead: string;
  adress: string;
  Phone: string;
  insta: string;
  rating: number;
}) {
  return (
    <div className={styled.card}>
      <div className="divImg">
        <img src={inf.imgSrc} alt="" />
        <div className="divRating">
          <Rating name="read-only" defaultValue={1} max={1} readOnly />
          <p>4.5</p>
        </div>
      </div>
      <div className="divInfo">
        <h2>{inf.titleHead}</h2>
        <p>{inf.adress}</p>
        <div className="divLocation">
          <i className="fa-solid fa-location-dot"></i>
          <p> 1 Km de distância</p>
        </div>
      </div>
    </div>
  );
}
