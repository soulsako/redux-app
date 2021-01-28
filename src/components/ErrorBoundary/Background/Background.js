import React from 'react';
import useStyles from './Background.style';
import IconCenter from '../../../assets/images/bg/Center.svg';
import IconLeft from '../../../assets/images/bg/Left.svg';
import IconRight from '../../../assets/images/bg/Right.svg';

const strEncodedIconCenter = encodeURIComponent(IconCenter);
const strEncodedIconLeft = encodeURIComponent(IconLeft);
const strEncodedIconRight = encodeURIComponent(IconRight);

const strDataIconCenter = `url("data:image/svg+xml,${strEncodedIconCenter}")`;
const strDataIconLeft = `url("data:image/svg+xml,${strEncodedIconLeft}")`;
const strDataIconRight = `url("data:image/svg+xml,${strEncodedIconRight}")`;

const Background = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <div className={`${classes.image} ${classes['image--left']}`} style={{ backgroundImage: strDataIconLeft }} />
      <div
        className={`${classes.image} ${classes['image--center']}`}
        style={{ backgroundImage: strDataIconCenter }}
      />
      <div className={`${classes.image} ${classes['image--right']}`} style={{ backgroundImage: strDataIconRight }} />
    </div>
  );
};

export default Background;
