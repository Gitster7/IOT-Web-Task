import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from './card.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={3} xs={12}>
          <Paper className={classes.paper}><RecipeReviewCard order="01" title="我英民次他" subtitle="不想別" image="https://st1.thehealthsite.com/wp-content/uploads/2019/01/Body-pain-655x353.jpg" /></Paper>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Paper className={classes.paper}><RecipeReviewCard order="02" title="斯設從於是" subtitle="是些子來竟" image="https://images.lifealth.com/uploads/2018/03/what-are-the-cause-of-body-ache.jpg" /></Paper>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Paper className={classes.paper}><RecipeReviewCard order="03" title="幾能工人東" subtitle="我留再從道" image="https://cdn.shopify.com/s/files/1/0938/1626/articles/Cold_and_Flu_blog_hero.jpeg?v=1575604478" /></Paper>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Paper className={classes.paper}><RecipeReviewCard order="04" title="供排版時填充" subtitle="不要子來竟" image="https://columbuschiropractors.com/wp-content/uploads/2016/06/woman-tilting-her-head-with-neck-pain.jpg" /></Paper>
        </Grid>
      </Grid>
      <p className="gridFoot">這要幹嘛的 -></p>
      <hr />
    </div>
  );
}
