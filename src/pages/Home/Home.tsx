import styled from './Home.module.scss';
import barberimg from '@assets/images/images.png';
import Card from '@components/Common/Card/Card';

export default function Home() {
  return (
    <>
      <div className={styled.HomePage}>
        <main>
          <Card
            imgSrc={barberimg}
            titleHead="Barber Shop"
            adress="Rua Jose Mia Pica, 206, Tupiniquin - Tribufu"
            insta="@Barbershop"
            Phone="(66) 9999-999"
            rating={2.3}
          />
          <Card
            imgSrc={barberimg}
            titleHead="Barber Shop"
            adress="Rua Jose Mia Pica, 206, Tupiniquin - Tribufu"
            insta="@Barbershop"
            Phone="(66) 9999-999"
            rating={2.3}
          />
          <Card
            imgSrc={barberimg}
            titleHead="Barber Shop"
            adress="Rua Jose Mia Pica, 206, Tupiniquin - Tribufu"
            insta="@Barbershop"
            Phone="(66) 9999-999"
            rating={2.3}
          />
          <div className="card"></div>
        </main>
      </div>
    </>
  );
}
