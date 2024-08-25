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
    <div
      className={styled.card}
    >
      <div className="card__header">
        <img src={inf.imgSrc} alt="sample1" />
      </div>
      <div className="card__body">
        <span className="card__body__date">Unidade</span>
        <h1 className="card__body__head">{inf.titleHead}</h1>
        <Rating
          name="half-rating-read"
          value={inf.rating}
          precision={0.1}
          sx={{
            color: '#1f2628',
          }}
          readOnly
        />
        <p className="card__body__content">{inf.adress}</p>
      </div>
      <div className="card__footer">
        <div className="card__Footer__first">
          <div>
            <p>
              <i className="fa-brands fa-instagram"></i>
            </p>
          </div>
          <label>{inf.insta}</label>
        </div>
        <div className="card__Footer__second">
          <div>
            <p>
              <i className="fa-solid fa-phone"></i>
            </p>
          </div>
          <label>{inf.Phone}</label>
        </div>
        <div className="card__Footer__third">
          <div>
            <p>
              <i className="fa-regular fa-calendar-check"></i>
            </p>
          </div>
          <label>Agende já</label>
        </div>
      </div>
    </div>
  );
}
