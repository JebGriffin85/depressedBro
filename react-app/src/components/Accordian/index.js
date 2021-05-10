import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chat from '../Chat/index';
import './index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  // const classes = useStyles();

  return (
    <div className='accordion-container'>
      <Accordion className='accordion-container2'>
          
        <AccordionSummary className='accordion-container1'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Live Bro Chat</Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion-container3'>
          <Typography>
            <Chat />
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
