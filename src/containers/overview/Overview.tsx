import { Grid, Divider } from '@common/components';
import { AccountInfo } from '@components/info';
import { Typography, SubTitle } from '@common/components/typography';

export default function Overview() {
  return (
    <Grid sx={{ backgroundColor: 'primary.main', padding: 4 }}>
      <Grid item xs={12} sx={{ marginBottom: 2 }}>
        <SubTitle>
          Janet Mitchel . As of 10/15/20XX
        </SubTitle>
        <Typography variant="h4">
          Sample Retirement Plan
        </Typography>
      </Grid>
      <Grid container item>
        <Grid container item xs={4}>
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <AccountInfo
              title="YOUR BALANCE"
              content="$55,748.74"
              variant="default"
              size="lg"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <AccountInfo
                  title="VESTED BALANCE"
                  content="+$55,748.74"
                  variant="default"
                />
              </Grid>
              <Grid item xs={6}>
                <AccountInfo
                  title="1 DAY CHANGE"
                  content="+$852.78(+1.7%)"
                  variant="success"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem sx={{ marginX: 1, backgroundColor: 'primary.contrastText' }} />
        <Grid container item xs={7}>
          <Grid item xs={4}>
            <AccountInfo
              title="RATE OF RETURN"
              subTitle="01/01/20XX TO 10/15/20XX"
              content="+20.74%"
              variant="success"
            />
          </Grid>
          <Grid item xs={4}>
            <AccountInfo
              title="CONTRIBUTIONS"
              subTitle="ON 10/15/20XX"
              content="$237.75"
              variant="default"
            />
          </Grid>
          <Grid item xs={4}>
            <AccountInfo
              title="LOANS"
              subTitle="OUTSTANDING BALANCE"
              content="$10,528.59"
              variant="default"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
