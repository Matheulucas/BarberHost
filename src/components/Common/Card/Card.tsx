import styled from "./Card.module.scss";
export default function Card(inf:{imgSrc:string,
  spanTag:string,
  constentHead:string,
  constentPara:string,
  views:string,
  reads:string,
  comment:string,
  color:string}
) {
  return (
    <div className={styled.card}>
      <div className="card__header">
        <img src={inf.imgSrc} alt="sample1" />
      </div>
      <div className="card__body">
        <span style={{ color: inf.color }} className="card__body__date">
          {inf.spanTag}
        </span>
        <h1 className="card__body__head">{inf.constentHead}</h1>
        <p className="card__body__content">{inf.constentPara}</p>
      </div>
      <div style={{ backgroundColor: inf.color }} className="card__footer">
        <div className="card__Footer__first">
          <div>
            <p>{inf.views}</p>
          </div>
          <label>Reads</label>
        </div>
        <div className="card__Footer__second">
          <div>
            <p>{inf.reads}</p>
          </div>
          <label>Views</label>
        </div>
        <div className="card__Footer__third">
          <div>
            <p>{inf.comment}</p>
          </div>
          <label>Comments</label>
        </div>
      </div>
    </div>
  );
}