import { ReactComponent as Hand } from '..//..//Components/Icons/Hand.svg';
import { ReactComponent as Personalcard } from '..//..//Components/Icons/Personalcard.svg';
import { ReactComponent as Folder } from '..//..//Components/Icons/folder-2.svg';
import { ReactComponent as Edit } from '..//..//Components/Icons/edit.svg';
import { ReactComponent as Teacher } from '..//..//Components/Icons/teacher.svg';
import { ReactComponent as Code } from '..//..//Components/Icons/code.svg';
import { ReactComponent as Status } from '..//..//Components/Icons/status-up.svg';

// export function Blocks (){
export const Blocks = () => {
  return (
    <div className="dashboard-tiles-container">
      <h2>
        <Hand /> Witam!
      </h2>
      <h4>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności
      </h4>
      <div className="dashboard-tiles">
        <div>
          <p className="dashboard-tile-title">Moje CV</p>
          <Personalcard className="DashbordIcon" />
          <p className="dashboard-tile-description">
            Podgląd CV wraz z doświadczeniem
          </p>
          <p className="dashboard-tile-description">zobacz więcej</p>
        </div>
        <div>
          <p className="dashboard-tile-title">Projekty</p>
          <Folder className="DashbordIcon" />
          <p className="dashboard-tile-description">Moje własne projekty</p>
          <p className="dashboard-tile-description">zobacz więcej</p>
        </div>
        <div>
          <p className="dashboard-tile-title">Ćwiczenia</p>
          <Edit className="DashbordIcon" />
          <p className="dashboard-tile-description">
            Wszystkie wykonane ćwiczenia
          </p>
          <p className="dashboard-tile-description">zobacz więcej</p>
        </div>
        <div>
          <p className="dashboard-tile-title">Edukacja</p>
          <Teacher className="DashbordIcon" />
          <p className="dashboard-tile-description">Ukończone szkoły i kursy</p>
          <p className="dashboard-tile-description">zobacz więcej</p>
        </div>
        <div>
          <p className="dashboard-tile-title">Tech stack</p>
          <Code className="DashbordIcon" />
          <p className="dashboard-tile-description">
            Stack technologiczny realizowany na kursie
          </p>
          <p className="dashboard-tile-description">zobacz więcej</p>
          {/* <SeeMoreLink to="tech-stack" /> */}
        </div>
        <div>
          <p className="dashboard-tile-title">Doświadczenie</p>
          <Status className="DashbordIcon" />
          <p className="dashboard-tile-description">
            Poprzednie stanowiska pracy i szkolenia
          </p>
          <p className="dashboard-tile-description">zobacz więcej</p>
        </div>
      </div>
    </div>
  );
};
