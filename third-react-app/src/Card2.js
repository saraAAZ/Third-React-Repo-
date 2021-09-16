import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


  const MediaCard = (props) =>{
      let {data} = props;
      return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.picture}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <br></br>
        <Typography>
        Fisrt Name : {data.firstName}s
        </Typography>
        <Typography>
            Last Name : {data.lastName};
        </Typography>
      </CardContent>

    </Card>
  );
}
export default  MediaCard
