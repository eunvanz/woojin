import "./style.scss";

interface SubTitleProps {
  title: string;
}

const SubTitle = ({ title }: SubTitleProps) => (
  <div className="SubTitle">
    <div className="SubTitle__inner">
      <h2>{title}</h2>
    </div>
  </div>
);

export default SubTitle;
