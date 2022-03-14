import Typography from './Typography';

const SubTitle: React.FC = ({ children }) => {
  return (
    <Typography variant="subtitle1">
      { children }
    </Typography>
  );
};

export default SubTitle;
