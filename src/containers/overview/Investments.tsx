import { Button } from '@components/button';
import { Box, PageSection, CardActions } from '@components/index';

export default function Investments() {
  const PageSectionFooter = (
    <>
      <Button
        variant="outlined"
        color="primary"
      >
        Manage My Investments
      </Button>
      <Button
        variant="contained"
        color="primary"
      >
        View Details
      </Button>
    </>
  );
  return (
    <PageSection title="Investments" SectionFooter={PageSectionFooter}>
      <Box component="div">
        <table className="table-auto w-full text-gray-500">
          <thead>
            <tr className="border-b order-gray-200 text-left">
              <th>INVESTMENT</th>
              <th>ASSET CATEGORY</th>
              <th>% OF TOTAL</th>
              <th>BALANCE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b order-gray-200 text-left">
              <td>Principal Real Estate Securities Fund</td>
              <td>Specialty</td>
              <td>20.37%</td>
              <td>$11,355.27</td>
            </tr>
            <tr className="border-b order-gray-200 text-left">
              <td>American Funds EuroPacific Growth</td>
              <td>International Global</td>
              <td>20.17%</td>
              <td>$11,246.20</td>
            </tr>
            <tr className="border-b order-gray-200 text-left">
              <td>Vanguard Small Cap Index Fund</td>
              <td>Small-Cap</td>
              <td>19.66%</td>
              <td>$10,959.32</td>
            </tr>
            <tr className="border-b order-gray-200 text-left">
              <td>Vanguard Mid Capitalization Index Fund</td>
              <td>Mid-Cap</td>
              <td>19.81%</td>
              <td>$11,042.65</td>
            </tr>
            <tr className="border-b order-gray-200 text-left">
              <td>BlackRock Equity Index CIT</td>
              <td>Large-Cap</td>
              <td>19.99%</td>
              <td>$11,145.30</td>
            </tr>
          </tbody>
        </table>
      </Box>
      
    </PageSection>
  );
}
