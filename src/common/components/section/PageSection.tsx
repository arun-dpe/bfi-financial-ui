import { styled } from '@mui/material/styles';
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { CardTitle } from '@components/typography';

const StyledSection = styled(Card)<CardProps>(({ theme }) => ({
  margin: theme.spacing(2),
  textAlign: 'left',
  fontFamily: theme.typography.fontFamily,
  borderRadius: theme.spacing(0.5),
  padding: theme.spacing(2),
}));

type PageSectionProps = {
  title?: string;
  subTitle?: string;
  isBlock?: boolean;
  SectionFooter?: JSX.Element;
};

const PageSection: React.FC<PageSectionProps> = (props) => {
  const {
    isBlock = true,
    title = '',
    subTitle = '',
    children,
    SectionFooter,
  } = props;
  const contentClassName = isBlock ? "h-full w-full" : '';

  const renderTitle = () => {
    if (title) {
      return <CardTitle title="Check your financial wellness" variant="title" />;
    }
    return null;
  };

  const renderSubTitle = () => {
    if (subTitle) {
      return (<CardTitle
        title="Planning for retirement is an important step on your financial wellness journey"
        variant="subTitle"
      />);
    }
    return null;
  };

  const renderCardFooter = () => {
    if (SectionFooter) {
      return (
        <CardActions sx={{ float: 'right'}}>
          { SectionFooter }
        </CardActions>
      )
    }
    return null;
  };

  return (
    <StyledSection>
      <CardContent className={`p-4 ${contentClassName}`}>
        { renderTitle() }
        { renderSubTitle() }
        { children }
      </CardContent>
      { renderCardFooter() }
    </StyledSection>
  );
};


export default PageSection;
