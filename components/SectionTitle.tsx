interface SectionTitleProps {
  subtitle?: string;
  tittle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, tittle }) => {
  return (
    <div className="wrapper text-center pb-10 ">
      <span className="uppercase font-semibold tracking-widest text-accent">
        {subtitle}
      </span>
      <h2 className="text-3xl ">{tittle}</h2>
    </div>
  );
};

export default SectionTitle;
